const sinon = require('sinon');
const { expect } = require('chai');
const BikeModel = require('../models/bikeModel');
const CompoModel = require('../models/compoModel');

const bikeRouterController = require('../controllers/bikeRouterController')(
	BikeModel,
	CompoModel
);

describe('Bike Router Controller', () => {
	let req = {};
	let res = {};
	let statusSpy = null;

	beforeEach(() => {
		req.params = {};
		res.json = () => {};
		res.status = () => {};
		res.send = () => {};

		statusSpy = sinon.spy(res, 'status');
	});

	afterEach(() => {
		sinon.restore();
	});

	it('[GET] Should return status 400 if no bikeId is passed in req', () => {
		bikeRouterController.get(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[GET] Should send status 400 an error is thrown', (done) => {
		req.params = { bikeId: '5f4e48d27edd9832f01d6cc4' };
		res.json = () => {};
		res.status = () => {};
		res.send = () => {};

		const bikeFindFake = sinon.fake.yields(true, 'alex');
		sinon.replace(BikeModel, 'find', bikeFindFake);

		const compoFindFake = sinon.fake.returns(null, 'alex');
		sinon.replace(CompoModel, 'find', compoFindFake);

		const jsonError = sinon.fake.returns(new Error());
		sinon.replace(res, 'json', jsonError);

		statusSpy = sinon.spy(res, 'status');

		bikeRouterController.get(req, res);

		done();
		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[GET] Should call res.status(200) with a bike', (done) => {
		req.params.bikeId = '5f4e48d27edd9832f01d6cc4';

		const bikeFindFake = sinon.fake.yields(null, 'alex');
		sinon.replace(BikeModel, 'find', bikeFindFake);

		const compoFindFake = sinon.fake.yields(true, 'alex');
		sinon.replace(CompoModel, 'find', compoFindFake);

		bikeRouterController.get(req, res);

		done();
		expect(statusSpy.calledWith(200)).to.be.true;
	});

	it('[GET] Should call res.status(200) with a bike and no errors', (done) => {
		req.params.bikeId = '5f4e48d27edd9832f01d6cc4';

		const bikeFindFake = sinon.fake.yields(null, 'alex');
		sinon.replace(BikeModel, 'find', bikeFindFake);

		const compoFindFake = sinon.fake.yields(null, 'alex');
		sinon.replace(CompoModel, 'find', compoFindFake);

		bikeRouterController.get(req, res);

		done();
		expect(statusSpy.calledWith(200)).to.be.true;
	});
});
