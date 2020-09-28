const sinon = require('sinon');
const { expect } = require('chai');
const CompoModel = require('../models/compoModel');
const { deleteOne } = require('../models/compoModel');

const compoRouterController = require('../controllers/compoRouterController')(
	CompoModel
);

describe('Compo Router Controller', () => {
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

	it('[GET] Should send status 400 if no compoId recieved', () => {
		req.params.compoId = null;

		compoRouterController.get(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should response with status 400 if find throws an error', () => {
		req.params.compoId = '5f50f1a88895343e788b5a45';

		const compoFindFake = sinon.fake.yields(true, 'compo');
		sinon.replace(CompoModel, 'find', compoFindFake);

		compoRouterController.get(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should response with status 200 if all goes ok', () => {
		req.params.compoId = '5f50f1a88895343e788b5a45';

		const compoFindFake = sinon.fake.yields(null, 'compo');
		sinon.replace(CompoModel, 'find', compoFindFake);

		compoRouterController.get(req, res);

		expect(statusSpy.calledWith(200)).to.be.true;
	});
});
