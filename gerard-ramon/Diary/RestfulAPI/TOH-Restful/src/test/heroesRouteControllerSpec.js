const should = require('should');
const sinon = require('sinon');

const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
	describe('POST', () => {
		it('should respond 400 when name is missing', () => {
			// Preparació de l'escenari
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

			res.status.calledWith(400).should.equal(true, 'Name is required');
			res.send
				.calledWith('Name is required')
				.should.equal(true, 'Message is not correct');
		});
	});
});
