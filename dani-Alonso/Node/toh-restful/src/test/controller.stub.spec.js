const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/hero/heroesRouteController');

describe('Heroes controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('[POST]sould call status only once,', () => {
		const Hero = function () {
			this.save = () => {};
		};
		const req = {
			body: {
				name: 'Sherard'
			}
		};
		const res = {
			status: () => {},
			json: () => {},
			send: () => {}
		};
		const statusStub = sinon.stub(res, 'status');
		const jsonStub = sinon.stub(res, 'json');
		controller(Hero).post(req, res);

		// assertion es que el status 201
		expect(statusStub.callCount).to.equal(1);
	});
	it('sould call find without query', () => {});
	it('sould call find with a query', () => {});
});
