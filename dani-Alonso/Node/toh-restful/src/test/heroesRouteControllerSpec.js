const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/hero/heroesRouteController');

describe('Heroes Controller', () => {
	describe('POST', () => {
		it('should respond status 404 when name is missing', () => {
			const Hero = function heroConstructor() {
				this.save = () => {};
			};
			const req = {
				body: {}
			};
			const res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero);
			controller.post(req, res);

			res.status
				.calledWith(400)
				.should.equal(true, 'Bad status, name is not required');
			res.send
				.calledWith('Name is required!')
				.should.equal(true, 'Message is not correct');
		});
	});

	it('should respond status 201 when ', () => {
		const Hero = function heroconstructor() {
			this.save = () => {};
		};
		const req = {
			body: {
				name: 'Bombasto'
			}
		};
		const hero = req.body;

		const res = {
			status: sinon.spy(),
			json: function newHero(hero) {
				return hero;
			},
			send: sinon.spy()
		};
		const controller = heroesController(Hero);
		controller.post(req, res);

		res.status.calledWith(201).should.equal(true, 'good status');
		res.json(hero).should.equal(hero);
	});

	describe('GET', () => {
		it('GET BY ID should response with hero with same id', () => {
			const req = {
				query: {
					id: 1
				}
			};
			const newQuery = {};
			newQuery.id = req.query.id;
			const Hero = [
				{
					id: 1,
					name: 'Bombasto'
				},
				{
					id: 2,
					name: 'Celeritas'
				}
			];
			const res = {
				json: Hero.find(newQuery, (hero) => {
					return hero;
				})
			};
			const controller = heroesController(Hero);
			controller.get(req, res);
		});
		it('should respond status 404 with a non existing id', () => {
			const req = {
				query: {
					id: 1
				}
			};
		});
	});
});
