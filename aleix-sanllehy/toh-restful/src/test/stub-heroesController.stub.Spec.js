const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe('STUB - Heroes controller', () => {
	afterEach(() => {
		sinon.restore();
	});

	xit('STUB - POST - should call status only once', () => {
		const Hero = function () {
			this.save = () => {};
		};

		const req = {
			body: {}
		};

		const res = {
			status: () => {},
			send: () => {},
			json: () => {}
		};

		const statusStub = sinon.stub(res, 'status');
		const sendStub = sinon.stub(res, 'send');

		controller(Hero).post(req, res);

		expect(statusStub.callCount, 1);
		expect(sendStub.callCount, 1);
		expect(sendStub.calledWith('Name is required!')).to.equal(1);
	});

	xit('STUB - POST - should respond with status 400', () => {});

	xit('STUB - GET - should call find without query', () => {});

	xit('STUB - GET - should call find with a query', () => {});
});
