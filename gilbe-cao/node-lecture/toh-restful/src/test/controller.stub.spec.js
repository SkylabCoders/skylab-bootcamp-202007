const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe.skip('Heroes Controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should call status only once', () => {
		const Hero = function () {
			this.save = () => {};
		};

		const req = {
			body: {}
		};

		const res = {
			status: () => {},
			send: () => {}
		};

		const statusStub = sinon.stub(res, 'status');
		const sendStub = sinon.stub(res, 'send');

		controller(Hero).post(req, res);

		expect(statusStub.callCount).to.equal(1);
		expect(sendStub.callCount).to.equal(1);
		expect(sendStub.calledWith('Name is required!')).to.be.true;
	});

	it.skip('should respond with status 400', () => {});

	it.skip('should call find without query', () => {});

	it.skip('should call find with a query', () => {});
});
