const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');

describe.skip('Heroes Controller', () => {
	describe('POST', () => {
		let Hero = {};
		let res = {};
		let req = {};
		let controller = {};

		beforeEach(() => {
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
		afterEach(() => {
			sinon.restore();
		});
		it('should respond 400 when name is missing', () => {
			// Scenario setup

			controller.post(req, res);

			res.status.calledWith(400).should.equal(true, 'Name is required');
			res.send
				.calledWith('Name is required')
				.should.equal(true, 'Message is not correct');
		});

		it('should respond 201 with a valid name', () => {
			req = {
				body: { name: 'Bombasto' }
			};
			let hero = { id: 1, name: 'Bombasto' };

			controller.post(req, res);

			res.status.calledWith(201).should.equal(true, 'Name is required');
			res.json.calledWith(hero);
		});

		it('should show an error if something went wrong', () => {
			let error = '';
			body = {
				name: 'Bombasto'
			};
			Hero = function heroConstructor() {
				this.save = (callback) => {
					error = true;
					callback(error);
				};
			};

			controller.post(req, res);

			res.send.calledWith(error);
		});
	});
});
