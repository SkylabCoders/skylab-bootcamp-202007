const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/hero/heroRouteController');

describe('Hero controller', () => {
	beforeEach(() => {
		sinon.restore();
	});
	describe('GET', () => {
		it('should call a json with a hero', () => {
			const req = {
				hero: 'Bombasto'
			};

			const res = {
				json: () => {},
				status: () => {}
			};

			const jsonSpy = sinon.spy(res, 'json');
			controller.get(req, res);
			expect(jsonSpy.callCount).to.equal(1);
		});

		it('should called with status 200', () => {
			const req = {
				hero: 'Bombasto'
			};

			const res = {
				json: () => {},
				status: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');
			controller.get(req, res);

			expect(statusSpy.calledWith(200)).to.be.true;
		});

		it('[PUT] should send error when if save doesn`t work', () => {
			const req = {
				hero: {
					save: () => {},
					name: null
				},
				body: { name: 'dani' }
			};

			let res = {
				send: () => {},
				json: () => {}
			};

			const saveFake = sinon.fake.yields(null);

			sinon.replace(req.hero, 'save', saveFake);
			const jsonSpy = sinon.spy(res, 'json');

			controller.put(req, res);

			expect(jsonSpy.called).to.be.true;
		});

		it('[PUT] should send error when if save doesn`t work', () => {
			const req = {
				hero: {
					save: () => {},
					name: null
				},
				body: { name: 'dani' }
			};

			const res = {
				send: () => {},
				json: () => {}
			};

			const saveFake = sinon.fake.yields(true);

			sinon.replace(req.hero, 'save', saveFake);
			const sendSpy = sinon.spy(res, 'send');

			controller.put(req, res);

			expect(sendSpy.called).to.be.true;
		});
		it('[DELETER] should send error when hero have an error', () => {
			const req = {
				hero: {
					remove: () => {}
				}
			};

			const res = {
				send: () => {},
				sendStatus: () => {}
			};

			const removeFake = sinon.fake.yields(true);

			sinon.replace(req.hero, 'remove', removeFake);

			const sendSpy = sinon.spy(res, 'send');

			controller.deleter(req, res);

			expect(sendSpy.called).to.be.true;
		});
		it('PATCH] should send error when hero have an error', () => {
			const req = {
				body: {
					name: 'bombasto'
				},
				hero: {
					save: () => {}
				}
			};

			const res = {};

			const saveSpy = sinon.spy(req.hero, 'save');

			controller.patch(req, res);
			expect(saveSpy.called).to.be.true;
		});
		it('[PATCH1] should send error when hero have an error', () => {
			const req = {
				hero: {
					save: () => {}
				},
				body: {}
			};

			const res = {
				send: () => {}
			};

			const saveFake = sinon.fake.yields(true);

			sinon.replace(req.hero, 'save', saveFake);

			const sendSpy = sinon.spy(res, 'send');

			controller.patch(req, res);

			expect(sendSpy.called).to.be.true;
		});
		it('[PATCH1] should send error when hero have an error', () => {
			const req = {
				hero: {
					save: () => {}
				},
				body: {}
			};

			const res = {
				json: () => {}
			};

			const saveFake = sinon.fake.yields(null);

			sinon.replace(req.hero, 'save', saveFake);

			const jsonSpy = sinon.spy(res, 'json');

			controller.patch(req, res);

			expect(jsonSpy.called).to.be.true;
		});
	});
});
