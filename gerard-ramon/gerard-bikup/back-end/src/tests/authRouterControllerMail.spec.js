const sinon = require('sinon');
const { expect } = require('chai');

const UserModel = require('../models/userModel');

const authRouterControllerMail = require('../controllers/authControllers/authRouterControllerMail')(
	UserModel
);

describe('Auth Router Mail Controller', () => {
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

	it('Should res.status 400 when no newUser is passed', () => {
		req.newUser = null;

		authRouterControllerMail.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should res.status 400 when create user throws an error', () => {
		req.newUser = 'sd4f65s3d5fsd43f54s';

		const userCreateFake = sinon.fake.yields(true, 'someuser');
		sinon.replace(UserModel, 'create', userCreateFake);

		authRouterControllerMail.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should res.status 201 when creating an user', () => {
		req.newUser = 'sd4f65s3d5fsd43f54s';

		const userCreateFake = sinon.fake.yields(false, 'someuser');
		sinon.replace(UserModel, 'create', userCreateFake);

		authRouterControllerMail.post(req, res);

		expect(statusSpy.calledWith(201)).to.be.true;
	});
});
