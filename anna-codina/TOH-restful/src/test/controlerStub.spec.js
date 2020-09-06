const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('../controler/heroesRouteControler');

describe('Heroes controler', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('Stub POST should status only once', () => {
		const Hero = function hero() {
			this.save = () => {};
		};

		const req = {
			body: {}
		};
		const res = {
			status: () => {},
			json: () => {},
			send: () => {}
		};
		const statusStub = sinon.stub(res, 'status');
		const jsonStub = sinon.stub(res, 'json');

		controler(Hero).post(req, res);

		expect(statusStub.callCount).to.equal(1);
		expect(jsonStub.notCalled).to.equal(true);
	});
});
