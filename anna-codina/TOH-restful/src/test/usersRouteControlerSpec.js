const should = require('should');
const sinon = require('sinon');
const usersControler = require('../controler/usersRouteControler');

describe('UsersRouteControler', () => {
	describe('POST', () => {
		it('should  respond status 400 when name is missing', () => {
			const User = function userConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {
					password: 'password'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const controler = usersControler(User);
			controler.post(req, res);

			res.status
				.calledWith(400)
				.should.equal(
					true,
					'Badd status, name not is required in this scenario'
				);

			res.send
				.calledWith('name is required')
				.should.equal(true, 'Message is not correct');
		});
		it('should  respond status 400 when password is missing', () => {
			const User = function userConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {
					name: 'Bombasto'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const controler = usersControler(User);
			controler.post(req, res);

			res.status
				.calledWith(400)
				.should.equal(
					true,
					'Badd status, name not is required in this scenario'
				);

			res.send
				.calledWith('password is required')
				.should.equal(true, 'Message is not correct');
		});
		it('should  respond status 201 when name and password is the body', () => {
			const User = function userConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {
					name: 'Bombasto',
					password: 'password'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const controler = usersControler(User);
			controler.post(req, res);

			res.status.calledWith(201).should.equal(true, 'Name is required');
		});
	});
	describe('GET', () => {
		it(`should return the user list if don't put id or name in the req query`, () => {
			const req = {
				query: {}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const User = {
				find: function find() {}
			};

			const controler = usersControler(User);
			controler.get(req, res);

			res.status.calledWith(200).should.equal(true);
		});
		it(`should return the user list if put id in the req query`, () => {
			const req = {
				query: {
					id: '13'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const User = {
				find: function find() {}
			};

			const controler = usersControler(User);
			controler.get(req, res);

			res.status.calledWith(200).should.equal(true);
		});
		it(`should return the user list if put name in the req query`, () => {
			const req = {
				query: {
					name: 'Bombasto'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const User = {
				find: (query, callback) => {
					callback();
				}
			};

			const controler = usersControler(User);
			controler.get(req, res);

			res.status.calledWith(200).should.equal(true);
		});
		it(`should return error when we calll the hero list`, () => {
			const req = {
				query: {
					id: '13'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const User = {
				find: (query, callback) => {
					const err = 'err';
					callback(err);
				}
			};

			const controler = usersControler(User);
			controler.get(req, res);

			res.status.called.should.equal(true);
		});
	});
});
