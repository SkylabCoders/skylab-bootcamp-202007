// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const { deleter } = require('../controllers/heroRouteController');

describe('Hero Controller', () => {
	describe('DELETE', () => {
		const req = {
			hero: { remove: sinon.spy() }
		};
		const res = {
			sendStatus: sinon.spy()
		};

		deleter(req, res);

		it('should return a 204', () => {
			req.hero.remove.called.should.equal(true, 'remove has been called');
			res.sendStatus.called.should.equal(true, 'sendstatus has been called');
			res.sendStatus.calledWith(204).should.equal(true, 'it returns a 204');
		});
	});
});
