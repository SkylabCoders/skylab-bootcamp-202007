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
	afterEach(() => {
		sinon.restore();
	});
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
	describe('GET with spy', () => {
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
	describe('GET with stub', () => {
		const req = {};
		const res = {
			json: sinon.stub()
		};

		get(req, res);

		it('should be called', () => {
			res.json.called.should.equal(true, 'res.json has been called');
		});
	});
	describe('GET with fake', () => {
		const req = {};
		const res = {
			json: sinon.fake()
		};

		get(req, res);

		it('should be called', () => {
			res.json.called.should.equal(true, 'res.json has been called');
		});
	});
	describe('GET with mock', () => {
		const req = {};
		const res = {
			json: sinon.mock()
		};

		get(req, res);

		it('should be called', () => {
			res.json.called.should.equal(true, 'res.json has been called');
		});
	});
	describe('PUT, save, with error true', () => {
		it('we test the callback inside of save', () => {
			const req = {
				body: {
					name: 'John'
				},
				hero: {
					name: 'Messi',
					save: () => {}
				}
			};

			const hero = req.hero;

			const res = {
				send: sinon.spy(),
				json: sinon.spy()
			};

			const saveFake = sinon.fake.yields(true);
			sinon.replace(req.hero, 'save', saveFake);

			put(req, res);

			res.send.called.should.equal(true);
		});
	});
	describe('PUT, save, with error false', () => {
		it('we test the callback inside of save', () => {
			const req = {
				body: {
					name: 'John'
				},
				hero: {
					name: 'Messi',
					save: () => {}
				}
			};

			const hero = req.hero;

			const res = {
				send: sinon.spy(),
				json: sinon.spy()
			};

			const saveFake = sinon.fake.yields(false);
			sinon.replace(req.hero, 'save', saveFake);

			put(req, res);

			res.json.called.should.equal(true);
		});
	});
	describe('DELETE, error true', () => {
		const req = {
			hero: { remove: () => {} }
		};
		const res = {
			send: sinon.spy(),
			sendStatus: sinon.spy()
		};

		const deleteFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'remove', deleteFake);

		deleter(req, res);

		it('error true should work', () => {
			res.send.called.should.equal(true);
		});
	});
	describe('DELETE, error false', () => {
		const req = {
			hero: { remove: () => {} }
		};
		const res = {
			send: sinon.spy(),
			sendStatus: sinon.spy()
		};

		const deleteFake = sinon.fake.yields(false);
		sinon.replace(req.hero, 'remove', deleteFake);

		deleter(req, res);

		it('error true should work', () => {
			res.sendStatus.called.should.equal(true);
		});
	});
	describe('PATCH, error true', () => {
		const req = {
			hero: { save: () => {} },
			body: {}
		};
		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

		const Object = {
			entries: sinon.spy()
		}

		const patchFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'save', patchFake);

		patch(req, res);

		it('error true should work', () => {
			res.send.called.should.equal(true);
		});
	});
	describe('PATCH, error false', () => {
		const req = {
			hero: { save: () => {} },
			body: []
		};
		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

		const Object = {
			entries: sinon.spy()
		}

		const patchFake = sinon.fake.yields(false);
		sinon.replace(req.hero, 'save', patchFake);

		patch(req, res);

		it('error true should work', () => {
			res.json.called.should.equal(true);
		});
	});
	describe.skip('PATCH, entries is called', () => {
		const req = {
			hero: { save: () => {} },
			body: []
		};
		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

	

		const Object = {
			entries: {forEach: () => {}}
		}

		const item = ['item1', 'item2']
		const key = 'item1'
		const value = 'item2'

		const patchFake = sinon.fake.yields(item);
		sinon.replace(Object.entries, 'forEach', patchFake);

		patch(req, res);

		it('entries is called', () => {
			patchFake.called.should.equal(true)
		});
	});
});
