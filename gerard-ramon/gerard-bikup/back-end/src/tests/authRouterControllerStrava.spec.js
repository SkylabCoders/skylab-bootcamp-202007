const sinon = require('sinon');
const { expect } = require('chai');
const axios = require('axios');

const UserModel = require('../models/userModel');

const authRouterControllerStrava = require('../controllers/authControllers/authRouterControllerStrava')(
	UserModel
);

describe('Auth Router Mail Controller', () => {
	let req = {};
	let res = {};
	let statusSpy = null;
	let user = null;

	beforeEach(() => {
		req.params = {};
		req.query = {};
		res.json = () => {};
		res.status = () => {};
		res.send = () => {};

		user = {
			access_token: '34gj5gj',
			refresh_token: '34gj5gj',
			expires_at: 32445,
			athlete: {
				username: '45435',
				profile: 'http://image.com',
				id: 555345,
			},
		};

		statusSpy = sinon.spy(res, 'status');
	});

	afterEach(() => {
		sinon.restore();
	});

	it('Should res.status 400 when no authUser or authMethod are passed', () => {
		req.authUser = null;

		authRouterControllerStrava.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[REGISTER] Should res.status 400 when findById throws error', () => {
		req.authUser = user;
		req.authMethod = 'register';
		req.userId = '5gjh5gj34gj5';

		const foundUser = 'user';

		const userFindByIdFake = sinon.fake.yields(true, foundUser);
		sinon.replace(UserModel, 'findById', userFindByIdFake);

		authRouterControllerStrava.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[REGISTER] Should res.status 400 when updating an user with strava data and saving throws error', () => {
		req.authUser = user;
		req.userId = '5gjh5gj34gj5';
		req.authMethod = 'register';

		const foundUser = {
			save: () => {},
		};

		const userFindByIdFake = sinon.fake.yields(false, foundUser);
		sinon.replace(UserModel, 'findById', userFindByIdFake);

		const updatedUser = {
			_doc: {
				something: 'something',
			},
		};

		const foundUserSaveFake = sinon.fake.yields(true, updatedUser);
		sinon.replace(foundUser, 'save', foundUserSaveFake);

		authRouterControllerStrava.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[REGISTER] Should res.status 201 when updating an user with strava data ', (done) => {
		req.authUser = user;
		req.userId = '5gjh5gj34gj5';
		req.authMethod = 'register';

		const foundUser = {
			save: () => {},
		};

		const userFindByIdFake = sinon.fake.yields(false, foundUser);
		sinon.replace(UserModel, 'findById', userFindByIdFake);

		const updatedUser = {
			_doc: {
				something: 'something',
			},
		};

		const foundUserSaveFake = sinon.fake.yields(false, updatedUser);
		sinon.replace(foundUser, 'save', foundUserSaveFake);

		const axiosReturn = {
			status: 200,
			data: {
				bikes: [{ id: '12f3h12' }, {}],
			},
		};
		sinon.stub(axios, 'get').returns(axiosReturn);

		authRouterControllerStrava.post(req, res);
		done();
		expect(statusSpy.calledWith(201)).to.be.true;
	});

	it('[REGISTER] Should res.status 201 when updating an user with strava data ', (done) => {
		req.authUser = user;
		req.userId = '5gjh5gj34gj5';
		req.authMethod = 'register';

		const foundUser = {
			save: () => {},
		};

		const userFindByIdFake = sinon.fake.yields(false, foundUser);
		sinon.replace(UserModel, 'findById', userFindByIdFake);

		const updatedUser = {
			_doc: {
				something: 'something',
			},
		};

		const foundUserSaveFake = sinon.fake.yields(false, updatedUser);
		sinon.replace(foundUser, 'save', foundUserSaveFake);

		const axiosReturn = {
			status: 200,
			data: {
				bikes: new Error(),
			},
		};
		sinon.stub(axios, 'get').returns(axiosReturn);

		authRouterControllerStrava.post(req, res);
		done();
		expect(statusSpy.calledWith(201)).to.be.true;
	});

	it('[LOGIN] Should res.status 400 when no existingUser is passed', () => {
		const user = {
			access_token: '34gj5gj',
			refresh_token: '34gj5gj',
			expires_at: 32445,
			athlete: {
				username: '45435',
				profile: 'http://image.com',
				id: 555345,
			},
		};

		req.authUser = user;
		req.authMethod = 'login';

		req.existingUser = null;

		authRouterControllerStrava.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[LOGIN] Should res.status 400 when update throws error', () => {
		const user = {
			access_token: '34gj5gj',
			refresh_token: '34gj5gj',
			athlete: {
				id: 555345,
			},
		};

		req.authUser = user;
		req.authMethod = 'login';

		req.existingUser = {
			_doc: {
				stravaAccessToken: null,
				stravaRefreshToken: null,
			},
		};

		const userUpdateFake = sinon.fake.yields(true, 'updatedUser');
		sinon.replace(UserModel, 'updateOne', userUpdateFake);

		authRouterControllerStrava.post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('[LOGIN] Should res.status 200 when updating a user', () => {
		const user = {
			access_token: '34gj5gj',
			refresh_token: '34gj5gj',
			athlete: {
				id: 555345,
			},
		};

		req.authUser = user;
		req.authMethod = 'login';

		req.existingUser = {
			_doc: {
				stravaAccessToken: null,
				stravaRefreshToken: null,
			},
		};

		const userUpdateFake = sinon.fake.yields(false, 'updatedUser');
		sinon.replace(UserModel, 'updateOne', userUpdateFake);

		authRouterControllerStrava.post(req, res);

		expect(statusSpy.calledWith(200)).to.be.true;
	});
});
