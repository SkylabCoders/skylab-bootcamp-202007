// const { expect } = require('chai');
// const should = require('should');
// const sinon = require('sinon');
// const diverController = require('../src/Routes/diverRoutes');

// describe('Diver controller', () => {
// 	afterEach(() => {
// 		sinon.restore();
// 	});
// 	xit('should respond with status 201', () => {
// 		const Diver = function diverConstructor() {
// 			this.save = () => {};
// 		};

// 		const req = {
// 			body: {},
// 		};

// 		const res = {
// 			status: sinon.spy(),
// 			json: () => {},
// 		};
// 		const controller = diverController(Diver);
// 		controller.post(req, res);

// 		res.status.called.should.equal(true);
// 	});

// 	it('should respond with status 200', () => {
// 		const Diver = {
// 			find: () => {},
// 		};

// 		const query = {};

// 		const res = {
// 			status: () => {},
// 			json: () => {},
// 			send: () => {},
// 		};
// 		const findFake = sinon.fake.yields('error', null);
// 		sinon.replace(Diver, 'find', findFake);
// 		const spySend = sinon.spy(res, 'send');

// 		const controller = diverController(Diver);
// 		controller.get(res);

// 		expect(spySend.calledWith('error')).to.be.false;
// 	});

const request = require('supertest');
const express = require('express');
const DATABASE_CONFIG = require('../Database/DATABASE_CONFIG');

const mockServer = express();
mockServer.use(express.urlencoded({ extended: false }));
const diverRoutes = require('../src/Routes/diverRoutes')(
	DATABASE_CONFIG.budgetsCollection
);

const ROOT_ROUTES = '/api/budgets';
mockServer.use(`${ROOT_ROUTES}`, diverRoutes);

describe('BUDGET ROUTES test set', () => {
	it('GET budgets ByUser with valid userId should return json data with status 200', () => {
		request(mockServer)
			.get(`${ROOT_ROUTES}/byUser/5f4faca78b141a231040efad`)
			.expect('Content-type', /json/)
			.expect(200);
	});
	it('GET budgets ByUser with invalid userId should return status 404', () => {
		request(mockServer).get(`${ROOT_ROUTES}/byUser/invalidId`).expect(404);
	});
});
