const should = require('should');
const sinon = require('sinon');

const deleter = require('../controllers/hero/heroDelete');

describe('Hero delete', () => {
	it('should delete hero', () => {
		const hero = { remove: (callback) => callback() };
		const req = { hero };
		const res = {
			send: () => {},
			status: sinon.spy()
		};
		deleter(req, res);

		res.status.calledWith(200).should.equal(true);
	});
	it('should not delete hero without hero', () => {
		const req = {};
		const res = {
			send: () => {},
			status: sinon.spy()
		};
		deleter(req, res);

		res.status.calledWith(400).should.equal(true);
	});

	it('should throw some remove error', () => {
		const hero = {
			remove: (callback) => {
				const err = 'err';
				callback(err);
			}
		};
		const req = { hero };
		const res = {
			send: sinon.spy(),
			status: () => {}
		};
		deleter(req, res);

		res.send.called.should.equal(true);
	});
});
