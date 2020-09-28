const sinon = require('sinon');
const { expect } = require('chai');

const UserModel = require('../models/userModel');

const authRouterControllerMailLogin = require('../controllers/authControllers/authRouterControllerMailLogin')(
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

	it('Should res.status 400 when no mail or password is passed', () => {
		authRouterControllerMailLogin.get(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should res.status 400 when find throws an error', () => {
		req.query.email = 'somemail@mail.com';
		req.query.password = 'randomPass123';

		const userFindFake = sinon.fake.yields(true, 'someuser');
		sinon.replace(UserModel, 'find', userFindFake);

		authRouterControllerMailLogin.get(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('Should res.status 200 when finding an user', () => {
		req.query.email = 'somemail@mail.com';
		req.query.password = 'randomPass123';

		const userFindFake = sinon.fake.yields(false, 'someuser');
		sinon.replace(UserModel, 'find', userFindFake);

		authRouterControllerMailLogin.get(req, res);

		expect(statusSpy.calledWith(200)).to.be.true;
	});
});
