const should = require('should');
const sinon = require('sinon');

const heroesController = require('../controllers/heroesRouteController');

const Hero = require('../models/heroModel');

describe('Heroes Controller', () => {
	describe('POST', () => {
		let req = null;
		let res = null;
		let controller = null;
		let Hero = null;
		beforeEach(() => {
			// Preparació de l'escenari
			Hero = function heroConstructor() {
				this.save = () => {};
			};

			req = {
				body: {}
			};

			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			controller = heroesController(Hero);
		});

		it('should respond 400 when name is missing', () => {
			controller.post(req, res);
			res.status.calledWith(400).should.equal(true, 'Name is required');
			res.send
				.calledWith('Name is required')
				.should.equal(true, 'Message is not correct');
		});

		it('should respond 201 when req.body has a name', () => {
			req.body.name = 'EstherVanesaSanti';
			controller.post(req, res);
			res.status.calledWith(201).should.equal(true);
		});
	});

	describe('GET', () => {
		let req = null;
		let res = null;
		let controller = null;
		let hero = null;
		beforeEach(() => {
			// Preparació de l'escenari
			hero = {
				find: (query, callback) => callback()
			};

			req = {
				body: {},
				query: {
					id: null
				}
			};

			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			controller = heroesController(hero);
		});

		it('should respond 200 when query is missing ', () => {
			controller.get(req, res);
			res.status.calledWith(200).should.equal(true);
		});

		it('should respond 200 when having a query with an id ', () => {
			req.query.id = 12;
			controller.get(req, res);
			res.status.calledWith(200).should.equal(true);
		});
	});
});
