const sinon = require('sinon');

const heroRouteController = require('../controllers/heroRouteController');

describe('Hero Route Controller', () => {
	describe('Should PUT', () => {
		let Heroes = null;
		let req = null;
		let res = null;
		let controller;

		beforeEach(() => {
			Heroes = function heroConstructor() {
				this.save = () => {};
			};
			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};
			controller = heroRouteController(Heroes);
		});
		xit('should respond status 200 when the parameter exists', () => {
			req = {
				hero: Heroes,
				body: {
					name: 'Bombasto'
				}
			};

			controller.put(req, res);

			res.status.calledWith(200).should.equal(true, 'message is not correct');
		});
	});
});
