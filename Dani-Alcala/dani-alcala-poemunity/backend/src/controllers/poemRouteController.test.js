// eslint-disable-next-line no-unused-vars
const { expect } = require('chai');
const should = require('should');
const sinon = require('sinon');
const {
	get, deleter, put
} = require('./poemRouteController');

describe('Poem Controller', () => {
	afterEach(() => {
		sinon.restore();
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

	describe('DELETE, error true', () => {
		const req = {
			poem: { remove: () => {} }
		};
		const res = {
			send: sinon.spy(),
			sendStatus: sinon.spy()
		};

		const deleteFake = sinon.fake.yields(true);
		sinon.replace(req.poem, 'remove', deleteFake);

		deleter(req, res);

		it('error true should work', () => {
			res.send.called.should.equal(true);
		});
	});
	describe('DELETE, error false', () => {
		const req = {
			poem: { remove: () => {} }
		};
		const res = {
			send: sinon.spy(),
			sendStatus: sinon.spy()
		};

		const deleteFake = sinon.fake.yields(false);
		sinon.replace(req.poem, 'remove', deleteFake);

		deleter(req, res);

		it('error true should work', () => {
			res.sendStatus.called.should.equal(true);
		});
	});
	describe('PUT, general case', () => {
		const req = {
			body: {
				userId: '1'
			},
			poem: {
				likes: ['1', '2'],
				save: sinon.spy()
			}
		};

		const poem = req.poem;

		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

		put(req, res);

		it('PUT should call save function', () => {
			poem.save.called.should.equal(true);
		});
	});
	describe('PUT, save, with error true', () => {
		it('we test the callback inside of save', () => {
			const req = {
				body: {
					userId: '1'
				},
				poem: {
					likes: ['1', '2'],
					save: () => {}
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy()
			};

			const saveFake = sinon.fake.yields(true);
			sinon.replace(req.poem, 'save', saveFake);

			put(req, res);

			res.send.called.should.equal(true);
		});
	});
	describe('PUT, save, with error false', () => {
		it('we test the callback inside of save', () => {
			const req = {
				body: {
					userId: '1'
				},
				poem: {
					likes: ['1', '2'],
					save: () => {}
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy()
			};

			const saveFake = sinon.fake.yields(false);
			sinon.replace(req.poem, 'save', saveFake);

			put(req, res);

			res.json.called.should.equal(true);
		});
	});
	describe('PUT, userId exists on likes array', () => {
		const req = {
			body: {
				userId: '1'
			},
			poem: {
				likes: ['1', '2'],
				save: sinon.spy()
			}
		};

		const poem = req.poem;

		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

		put(req, res);

		it('PUT should call splice function', () => {
			poem.likes.length.should.equal(1);
		});
	});
	describe('PUT, userId does not exist on likes array', () => {
		const req = {
			body: {
				userId: '10'
			},
			poem: {
				likes: ['1', '2'],
				save: sinon.spy()
			}
		};

		const poem = req.poem;

		const res = {
			send: sinon.spy(),
			json: sinon.spy()
		};

		put(req, res);

		it('PUT should call push function', () => {
			poem.likes.length.should.equal(3);
		});
	});
});
