const { expect } = require('chai');
const sinon = require('sinon'); // para poder crear spy, mocks, stub, fakes...
const controller = require('../controllers/heroesRouteController');
describe.skip('Heroes Controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('Should call status only once', () => {
		const Hero = function () {
			this.save = () => {};
		};
		const req = {
			body: {}
		};
		const res = {
			status: (code) => {},
			send: () => {}
		};
		const statusStub = sinon.stub(res, 'status');
		const sendStub = sinon.stub(res, 'send');

		controller(Hero).post(req, res);
		expect(statusStub.callCount).to.equal(1);
		expect(sendStub.callCount).to.equal(1);
		expect(sendStub.calledWith('Name is required!')).to.be.true;
	});
	// it('Should respond with status 400', () => {
	// it('should call find without a query', () => {
	// it('Should call find with a query', () => {
});
