const sinon = require('sinon');
const { expect } = require('chai');

const UserModel = require('../models/userModel');
const BikeModel = require('../models/bikeModel');
const CompoModel = require('../models/compoModel');

const bikeListRouterController = require('../controllers/bikeListRouterController')(
	UserModel,
	BikeModel,
	CompoModel
);

describe('Bike List Router Controller', () => {
	let req = {};
	let res = {};
	let statusSpy = null;

	beforeEach(() => {
		req.params = {};
		req.query = {};
		res.json = () => {};
		res.status = () => {};
		res.send = () => {};

		statusSpy = sinon.spy(res, 'status');
	});

	afterEach(() => {
		sinon.restore();
	});

	it('Should response with status 400 if no bikeUserId', () => {
		req.query.bikeUserId = null;

		const bikeFindFake = sinon.fake.yields(null, 'alex');
		sinon.replace(BikeModel, 'find', bikeFindFake);

		const compoFindFake = sinon.fake.returns(null, 'alex');
		sinon.replace(CompoModel, 'find', compoFindFake);

		bikeListRouterController.get(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should res status  200 if bikeUserId', (done) => {
		req.query.bikeUserId = 'd5f76sd5f7s5d7f';

		const bikeFindFake = sinon.fake.yields(null, [
			{ bike: 'alma' },
			{ bike: 'oiz' },
		]);
		sinon.replace(BikeModel, 'find', bikeFindFake);

		const compoFindFake = sinon.fake.yields(null, [
			{ compo: 'chain' },
			{ compo: 'brake' },
		]);
		sinon.replace(CompoModel, 'find', compoFindFake);

		bikeListRouterController.get(req, res);

		done();
		expect(statusSpy.calledWith(200)).to.be.true;
	});

	it('Should work if find has an error', (done) => {
		req.query.bikeUserId = 'd5f76sd5f7s5d7f';

		const bikeFindFake = sinon.fake.yields(true, [
			{ bike: 'alma' },
			{ bike: 'oiz' },
		]);
		sinon.replace(BikeModel, 'find', bikeFindFake);

		const compoFindFake = sinon.fake.yields(true, [
			{ compo: 'chain' },
			{ compo: 'brake' },
		]);
		sinon.replace(CompoModel, 'find', compoFindFake);

		bikeListRouterController.get(req, res);

		done();
		expect(statusSpy.calledWith(200)).to.be.true;
	});
});
