const { expect } = require('chai');
const sinon = require('sinon');

const controller = require('../controllers/heroesRouteController');

describe('Heroes Controller (with STUB)', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should call status only once when there is NO req.body.name', () => {
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

		controller(Hero).post(req, res);

		// Evaluamos que status se llame una vez status
		expect(statusStub.callCount).to.equal(1);
		// Aqui evaluamos que send no se llame
	});
	it('should call send only once when there is NO req.body.name', () => {
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

		const sendStub = sinon.stub(res, 'send');

		controller(Hero).post(req, res);

		// Evaluamos que send se llame una vez send
		expect(sendStub.callCount).to.equal(1);
	});
	it('should call json only once when there IS req.body.name', () => {
		const Hero = function () {
			this.save = () => {};
		};
		const req = {
			body: {
				name: 'Bombasto'
			}
		};

		const res = {
			status: () => {},
			json: () => {}
		};

		const jsonStub = sinon.stub(res, 'json');

		controller(Hero).post(req, res);

		// Evaluamos que json se llame una vez json
		expect(jsonStub.callCount).to.equal(1);
	});
	xit('should respond with status 400', () => {});
	xit('should respond with status 400', () => {});
	xit('should respond with status 400', () => {});
});
