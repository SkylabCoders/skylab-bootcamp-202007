const should = require('should');
const sinon = require('sinon');

const deleter = require('../controllers/hero/heroDelete');

describe('Hero delete', () => {
	it('should delete hero', () => {
		const hero = { remove: (callback) => callback() };
		const req = { hero };
		const res = {
			send: () => {},
			sendStatus: sinon.spy()
		};
		deleter(req, res);

		res.sendStatus.calledWith(200).should.equal(true);
	});
	it('should not delete hero without hero', () => {
		const req = {};
		const res = {
			send: () => {},
			sendStatus: sinon.spy()
		};
		deleter(req, res);

		res.sendStatus.calledWith(400).should.equal(true);
	});
});
