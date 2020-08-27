const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');
const { query } = require('express');

describe('Heroes Controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('POST METHOD 1: it should respons with status 201', () => {
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

		const statusSpy = sinon.spy(res, 'status');
		controller(Hero).post(req, res);

		console.log(statusSpy);
		expect(statusSpy.calledWith(201)).to.be.true;
	});

	it('POST METHOD: it should return a 400 if name is missing', () => {
		const Hero = function () {
			this.save = () => {};
		};
		const req = {
			body: {}
		};
		const res = {
			status: (n) => {},

			json: () => {},
			send: () => {}
		};

		const statusSpy = sinon.spy(res, 'status');
		controller(Hero).post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('GET METHOD: should call find with no query', () => {
		const Hero = {
			find: () => {}
		};
		const req = {};
		const res = {};

		const statusSpy = sinon.spy(Hero, 'find');
		controller(Hero).get(req, res);

		expect(statusSpy.called).to.be.true;
	});

	it('GET METHOD: should call find with a query', () => {
		const Hero = {
			find: () => {}
		};
		req = {
			query: {
				id: 'myId'
			}
		};
		const res = {};

		const statusSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(statusSpy.called).to.be.true;
	});

	it('GET METHOD: should show eror if something went wrong', () => {
		const Hero = {
			find: (callback) => {
				const error = 'error';
				callback(error);
			}
		};
		req = {
			query: {
				id: 'myId'
			}
		};
		const res = {
			send: () => {}
		};

		const statusSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);
		console.log(res.send.called);

		expect(res.send.called).to.be.true;
	});
});
