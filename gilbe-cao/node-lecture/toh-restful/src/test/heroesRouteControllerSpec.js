// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
	describe('POST', () => {
		it('should respond status 400 when name is missing', () => {
			const Hero = function heroContructor() {
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
				.should.equal(
					true,
					'Bad statud, name is not required in this scenario.'
				);

			res.send
				.calledWith('Name is required!')
				.should.equal(true, 'Message is not correct');
		});
	});
});
