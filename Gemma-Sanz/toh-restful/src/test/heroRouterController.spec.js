const { expect } = require('chai');

const sinon = require('sinon');

const controller = require('../controllers/heroRouteController');
const {
	saveFile
} = require('../../../node-lecture/file-system/file.management');
const { spy } = require('sinon');

describe('Hero controller (challenge)', () => {
	afterEach(() => {
		sinon.restore();
	});
	describe('GET', () => {
		it('should call json with a hero', () => {
			const req = {
				hero: {
					name: 'Bombastoo'
				}
			};
			const res = {
				json: () => {},
				status: () => {}
			};

			const jsonSpy = sinon.spy(res, 'json');

			controller.get(req, res);

			expect(jsonSpy.callCount).to.equal(1);
		});
		it('should respond with status 200', () => {
			const req = {
				hero: {
					name: 'Bombasto'
				}
			};
			const res = {
				json: () => {},
				status: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');

			controller.get(req, res);
			expect(statusSpy.calledWith(200)).to.be.true;
		});
		it('should respond with status 404', () => {
			const req = {};
			const res = {
				json: () => {},
				status: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');

			controller.get(req, res);
			expect(statusSpy.calledWith(404)).to.be.true;
		});
	});
	describe('PUT', () => {
		it('should call json with a hero', () => {
			const req = {
				body: {
					name: 'Bombastooo'
				},
				hero: {
					name: 'Petito',
					save: (callback) => {
						callback();
					}
				}
			};

			const res = {
				json: () => {},
				status: () => {}
			};
			const jsonSpy = sinon.spy(res, 'json');

			controller.put(req, res);

			expect(jsonSpy.callCount).to.equal(1);
		});
		it('should call status with a 201', () => {
			const req = {
				body: {
					name: 'Bombastooo'
				},
				hero: {
					save: (callback) => {
						callback();
					}
				}
			};

			const res = {
				json: () => {},
				status: () => {}
			};
			const statusSpy = sinon.spy(res, 'status');

			controller.put(req, res);

			expect(statusSpy.calledWith(201)).to.be.true;
		});
		it('should call send with an error if hero.save have an error', () => {
			const req = {
				body: {
					name: null
				},
				hero: {
					save: () => {}
				}
			};

			const res = {
				json: () => {},
				status: () => {},
				send: () => {}
			};

			const saveFake = sinon.fake.yields(true);

			sinon.replace(req.hero, 'save', saveFake);
			const sendSpy = sinon.spy(res, 'send');

			controller.put(req, res);

			expect(sendSpy.called).to.be.true;
		});
		it('should call status with a 404 if hero.save have an error', () => {
			const req = {
				body: {
					name: null
				},
				hero: {
					save: () => {}
				}
			};

			const res = {
				json: () => {},
				status: () => {},
				send: () => {}
			};

			const saveFake = sinon.fake.yields(true);

			sinon.replace(req.hero, 'save', saveFake);
			const statusSpy = sinon.spy(res, 'status');

			controller.put(req, res);

			expect(statusSpy.calledWith(404)).to.be.true;
		});
	});
	describe('DELETER', () => {
		it('should call sendStatus 204', () => {
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
		xit('should call status 404 with error CALLBAAAAACK', () => {
			const req = {
				hero: {
					name: 'Seleritassss',
					remove: (callback) => {
						callback();
					}
				}
			};

			const res = {
				status: () => {},
				send: () => {},
				sendStatus: () => {}
			};

			const statusSpy = sinon.spy(res, 'status');

			controller.deleter(req, res);

			expect(statusSpy.calledWith(404)).to.be.true;
		});
		xit('should call send with error CALLBAAAAACK', () => {
			const req = {
				hero: {
					name: 'Seleritassss',
					remove: (callback) => {
						callback();
					}
				}
			};

			const res = {
				send: () => {},
				send: () => {},
				sendStatus: () => {}
			};

			const sendSpy = sinon.spy(res, 'send');

			controller.deleter(req, res);

			expect(sendSpy.callCount).to.equal(1);
		});
		it('should send an error when hero.remove extist an error', () => {
			const req = {
				hero: {
					remove: () => {}
				}
			};

			const res = {
				status: () => {},
				send: () => {}
			};

			const removeFake = sinon.fake.yields(true);

			sinon.replace(req.hero, 'remove', removeFake);

			const sendSpy = sinon.spy(res, 'send');

			controller.deleter(req, res);

			expect(sendSpy.called).to.be.true;
		});
	});
	describe('PATCH', () => {
		it('should call json with a hero', () => {
			const req = {
				body: {
					name: 'Bombastooo'
				},
				hero: {
					name: 'Petito',
					save: (callback) => {
						callback();
					}
				}
			};

			const res = {
				json: () => {},
				status: () => {}
			};
			const jsonSpy = sinon.spy(res, 'json');

			controller.patch(req, res);

			expect(jsonSpy.callCount).to.equal(1);
		});
		it('should call send with error in hero.save with an error', () => {
			const req = {
				hero: {
					name: null,
					save: (callback) => {
						callback();
					}
				},
				body: {
					_id: 2543
				}
			};

			const res = {
				json: () => {},
				send: () => {}
			};

			const saveFake = sinon.fake.yields(true);
			sinon.replace(req.hero, 'save', saveFake);

			const sendSpy = sinon.spy(res, 'send');

			controller.patch(req, res);

			expect(sendSpy.callCount).to.equal(1);
		});
	});
});
