const { expect } = require('chai');
const sinon = require('sinon');

let controller = require('../controllers/heroesRouteController');

describe('Heroes Controller Stub', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('[POST] should call status only one', () => {
		const Hero = function () {
			this.save = () => {};
		};

		const req = { body: {} };

		const res = {
			send: () => {},
			status: () => {},
			json: () => {}
		};

		const statusStub = sinon.stub(res, 'status');
		const jsonStub = sinon.stub(res, 'json');

		controller(Hero).post(req, res);

		expect(statusStub.callCount).to.equal(1);
		expect(jsonStub.notCalled).to.true;
	});
});
