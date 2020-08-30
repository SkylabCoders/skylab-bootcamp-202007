const should = require('should');
const sinon = require('sinon');
const { put, patch, deleter, get } = require('../controler/userRouteControler');

describe('UserRouterControlerSpec', () => {
	describe('PUT', () => {
		it('Should return status 404 if req has no user', () => {
			const req = {};
			const res = {
				status: sinon.spy()
			};

			put(req, res);
			res.status.calledWith(404).should.equal(true);
		});
		it('Should return status 200 if req has found', () => {
			const req = {
				user: { name: 'Bombasto', save: function save() {} },
				body: { name: 'New Bombasto' }
			};

			const res = {
				status: sinon.spy()
			};

			put(req, res);
			res.status.calledWith(200).should.equal(true);
		});
	});
	describe('PATCH', () => {
		it('Should return status 404 if req has no user', () => {
			const req = {
				status: sinon.spy()
			};
			const res = {
				status: sinon.spy()
			};

			patch(req, res);
			res.status.calledWith(404).should.equal(true);
		});
		it('Should return status 200 if req has found without _id', () => {
			const req = {
				user: { name: 'Bombasto', save: function save() {} },
				body: { name: 'New Bombasto', power: 'Be cooler than you' }
			};

			const res = {
				status: sinon.spy()
			};

			patch(req, res);
			res.status.calledWith(200).should.equal(true);
		});
		it('Should return status 200 if req has found without _id', () => {
			const req = {
				user: { name: 'Bombasto', _id: 13, save: function save() {} },
				body: { name: 'New Bombasto', power: 'Be cooler than you' }
			};

			const res = {
				status: sinon.spy()
			};

			patch(req, res);
			res.status.calledWith(200).should.equal(true);
		});
	});
	describe('DELETER', () => {
		it('Should return status 404 if req has no user', () => {
			const req = {};
			const res = {
				status: sinon.spy()
			};

			deleter(req, res);
			res.status.calledWith(404).should.equal(true);
		});
		it('Should return status 200 if req has found', () => {
			const req = {
				user: { name: 'Bombasto', remove: function remove() {} },
				body: { name: 'New Bombasto' }
			};

			const res = {
				status: sinon.spy()
			};

			deleter(req, res);
			res.status.calledWith(200).should.equal(true);
		});
	});
	describe('GET', () => {
		it('Should return status 404 if req has no user', () => {
			const req = {};
			const res = {
				status: sinon.spy()
			};

			get(req, res);
			res.status.calledWith(404).should.equal(true);
		});
		it('Should return status 200 if req has found', () => {
			const req = {
				user: { name: 'Bombasto', save: function save() {} },
				body: { name: 'New Bombasto' }
			};

			const res = {
				status: sinon.spy(),
				json: sinon.spy()
			};

			get(req, res);
			res.status.calledWith(200).should.equal(true);
		});
	});
});
