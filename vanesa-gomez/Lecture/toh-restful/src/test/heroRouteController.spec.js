const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');
describe('Hero Controller', () => {
	beforeEach(() => {
		sinon.restore();
	});
	describe('GET', () => {
		it('should respond with status 200', () => {
			const req = {
				hero: 'vanesa'
			};
			const res = {
				status: () => {},
				json: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');
			controller.get(req, res);
			expect(statusSpy.calledWith(200)).to.be.true;
		});
		it('should respond with status 404', () => {
			const req = {};
			const res = {
				status: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');
			controller.get(req, res);
			expect(statusSpy.calledWith(404)).to.be.true;
		});
	});
	describe('PUT', () => {
		it('should called save when reciving a hero', () => {
			const req = {
				hero: {
					name: 'Vanesa',
					save: () => {}
				},
				body: {
					name: 'Sherad'
				}
			};
			const res = {};
			const saveSpy = sinon.spy(req.hero, 'save');
			controller.put(req, res);
			expect(saveSpy.called).to.be.true;
		});
		it('should call status 201', () => {
			const req = {
				hero: {
					name: 'vanesa',
					save: () => {}
				},
				body: {
					name: 'Van'
				}
			};
			const res = {
				status: () => {},
				json: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');
			const saveFake = sinon.fake.yields(null);
			sinon.replace(req.hero, 'save', saveFake);
			controller.put(req, res);
			expect(statusSpy.calledWith(201)).to.be.true;
		});
		it('should call status 404', () => {
			const req = {
				hero: {
					name: 'vanesa',
					save: () => {}
				},
				body: {
					name: 'Van'
				}
			};
			const res = {
				status: () => {},
				send: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');
			const saveFake = sinon.fake.yields(true);
			sinon.replace(req.hero, 'save', saveFake);
			controller.put(req, res);
			expect(statusSpy.calledWith(404)).to.be.true;
		});
	});
	describe('PATCH', () => {
		it('should called json function', () => {
			const req = {
				body: {
					key: 'myKey',
					value: 'myValue'
				},
				hero: {
					save: (callback) => {
						callback();
					}
				}
			};
			const res = {
				send: () => {},
				json: () => {},
				status: () => {}
			};
			const jsonSpy = sinon.spy(res, 'json');
			controller.patch(req, res);
			expect(jsonSpy.called).to.be.true;
		});
		it('should called with 404', () => {
			const req = {
				body: {
					key: 'myKey',
					value: 'myValue'
				},
				hero: {
					save: (callback) => {
						callback();
					}
				}
			};
			const res = {
				send: () => {},
				json: () => {},
				status: () => {}
			};
			const statusSpy = sinon.spy(res, 'status');
			const saveFake = sinon.fake.yields(true);
			sinon.replace(req.hero, 'save', saveFake);
			controller.patch(req, res);
			expect(statusSpy.calledWith(404)).to.be.true;
			expect(saveFake.callCount).to.equal(1);
		});
	});
	describe('DELETE', () => {
		it('should called with status 204', () => {
			const req = {
				hero: {
					remove: (callback) => {
						callback();
					}
				}
			};
			const res = {
				sendStatus: () => {}
			};
			const sendStatusSpy = sinon.spy(res, 'sendStatus');
			controller.deleter(req, res);
			expect(sendStatusSpy.calledWith(204)).to.be.true;
		});
		xit('should called with status 404', () => {
			const req = {
				hero: {
					remove: (callback) => {
						callback();
					}
				}
			};
			const res = {
				status: () => {},
				sendStatus: () => {}
			};
			const statusSpy = sinon.spy(res, 'status');
			controller.deleter(req, res);
			expect(statusSpy.calledWith(404)).to.be.true;
		});
	});
});
// 200 get, que puede acceder
// 404 no lo encuentra
// 201 del post, que crea -  también el put
// 204 el ok del delete
