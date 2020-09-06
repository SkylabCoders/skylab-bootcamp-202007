const should = require('should');
const sinon = require('sinon');

const get = require('../controllers/hero/heroesGet');

describe('Get Heroes', () => {
	it('should get heroes', () => {
		const req = { query: {} };
		const res = {
			json: () => {},
			send: () => {},
			status: sinon.spy()
		};
		const Hero = {
			find: (query, callback) => callback()
		};
		get(req, res, Hero);

		res.status.calledWith(200).should.equal(true);
	});

	it('should get heroes with specific query', () => {
		const req = { query: { id: 1 } };
		const res = {
			json: () => {},
			send: () => {},
			status: sinon.spy()
		};
		const Hero = {
			find: (query, callback) => callback()
		};
		get(req, res, Hero);

		res.status.calledWith(200).should.equal(true);
	});

	it('should throw error by find error', () => {
		const req = { query: { id: 1 } };
		const res = {
			json: () => {},
			send: sinon.spy(),
			status: () => {}
		};
		const Hero = {
			find: (query, callback) => {
				const err = 'err';
				callback(err);
			}
		};
		get(req, res, Hero);

		res.send.called.should.equal(true);
	});
});
