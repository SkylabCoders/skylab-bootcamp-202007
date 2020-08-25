const should = require('should');
const sinon = require('sinon');

const heroesController = require('../controllers/hero/heroDelete');

xdescribe('unit testing practice', () => {
	describe('POST', () => {
		it('should respond status 400 when name is missing', () => {
			const Hero = function heroConstructor() {
				this.save = () => {};
			};
			const req = { body: {} };
			const res = { status: sinon.spy(), json: sinon.spy() };

			const controller = heroesController(Hero);
			controller.post(req, res);

			res.status.calledWith(400).should.equal(true);
		});
	});
});
