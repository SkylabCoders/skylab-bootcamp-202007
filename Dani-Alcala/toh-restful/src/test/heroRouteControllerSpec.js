// eslint-disable-next-line no-unused-vars
const { expect } = require('chai');
const should = require('should');
const sinon = require('sinon');
const {
	deleter,
	get,
	put,
	patch
} = require('../controllers/heroRouteController');

describe('Hero Controller', () => {
	describe('DELETE', () => {
		const req = {
			hero: { remove: sinon.spy() }
		};
		const res = {
			sendStatus: sinon.spy()
		};

		deleter(req, res);

		it('remove should be called', () => {
			req.hero.remove.called.should.equal(true, 'remove has been called');
			/* res.sendStatus.called.should.equal(true, 'sendStatus has been called');
			res.sendStatus.calledWith(204).should.equal(true, 'it returns a 204'); */
		});
	});
	describe('GET', () => {
		const req = {};
		const res = {
			json: sinon.spy()
		};

		get(req, res);

		it('should be called', () => {
			res.json.called.should.equal(true, 'res.json has been called');
		});
	});
	describe('PUT', () => {
		const req = {
			body: {
				name: 'John'
			},
			hero: {
				name: 'Messi',
				save: sinon.spy()
			}
		};

		const hero = req.hero;

		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

		const error = 'error';
		put(req, res);

		it('PUT should call save function', () => {
			hero.save.called.should.equal(true);
		});
	});
	describe('PATCH', () => {});
});
