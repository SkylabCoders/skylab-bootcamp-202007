const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/rootHeroRouteController');

describe('Heroes Controller Stub', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should respond with status 201', () => {
		const Hero = function () {
			this.save = () => {};
		};
		const req = {
			body: {}
		};
		const res = {
			status: () => {},
			//		json: () => {},
			send: () => {}
		};
		const statusStub = sinon.stub(res, 'status');
		//const jsonStub = sinon.stub(res, 'json');

		controller(Hero).post(req, res);

		expect(statusStub.callCount).to.equal(1);
		//expect(jsonStub.notCalled).to.be.true;
		expect(statusStub.callCount).to.equal(1);
	});
	it('should respond with status 400', () => {});
	it('should call find without query', () => {});
	it('should call find with a query', () => {});
});
