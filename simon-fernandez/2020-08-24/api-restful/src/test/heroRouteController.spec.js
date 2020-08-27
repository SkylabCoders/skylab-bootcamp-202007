const sinon = require('sinon');

const heroRouteController = require('../controllers/heroRouteController');
const { expect } = require('chai');
const { replace } = require('sinon');

describe('Hero Route Controller', () => {
	describe(' PUT controller', () => {
		let req = null;
		let res = null;
		let controller;

		beforeEach(() => {
			res = {
				json: () => {},
				send: () => {}
			};
			controller = heroRouteController();
		});
		it('should execute the put fnction', () => {
			req = {
				hero: {
					save: () => {}
				},
				body: {
					name: 'newName'
				}
			};
			const changeSpy = sinon.spy(req.hero, 'save');
			controller.put(req, res);

			expect(changeSpy.called).to.be.true;
		});
		it('should respond status 200 when the parameter exists', () => {
			req = {
				hero: {
					save: () => {},
					name: null
				},
				body: {
					name: 'newName'
				}
			};
			const saveFake = sinon.fake.yields(null);
			sinon.replace(req.hero, 'save', saveFake);

			const jsonSpy = sinon.spy(res, 'json');

			controller.put(req, res);

			expect(jsonSpy.called).to.be.true;
		});
		it('should respond status 400 when the parameter exists', () => {
			req = {
				hero: {
					save: () => {},
					name: null
				},
				body: {
					name: 'newName'
				}
			};
			const saveFake = sinon.fake.yields(true, { name: req.body.name });
			sinon.replace(req.hero, 'save', saveFake);

			const jsonFake = sinon.spy(res, 'json');

			controller.put(req, res);

			expect(jsonFake.called).to.be.true;
		});
	});
	describe(' Patch Controller', () => {
		let req = null;
		let res = null;
		let controller;
		beforeEach(() => {
			res = {
				json: () => {},
				send: () => {}
			};
			controller = heroRouteController();
		});
		it('should execute the function', () => {
			const req = {
				hero: { save: () => {} },
				body: {
					key: 'key',
					value: 'myValue'
				}
			};

			const changeSpy = sinon.spy(req.hero, 'save');
			controller.patch(req, res);
			expect(changeSpy.called).to.be.true;
		});
		it('should respond status 200 when the parameter exists', () => {
			const req = {
				hero: { save: () => {} },
				body: {
					key: 'mykey',
					value: 'myValue'
				}
			};
			const changeFake = sinon.fake.yields(false);
			sinon.replace(req.hero, 'save', changeFake);

			const jsonFake = sinon.spy(res, 'json');
			controller.patch(req, res);
			expect(jsonFake.called).to.true;
		});
		it('should respond status 400 when the parameter exists', () => {
			const req = {
				hero: { save: () => {} },
				body: {
					key: 'mykey',
					value: 'myValue'
				}
			};
			const changeFake = sinon.fake.yields(true);
			sinon.replace(req.hero, 'save', changeFake);

			const jsonFake = sinon.spy(res, 'json');
			controller.patch(req, res);
			expect(jsonFake.called).to.true;
		});
	});
	describe(' Deleter Controller', () => {
		let req = null;
		let res = null;
		let controller;
		beforeEach(() => {
			res = {
				json: () => {},
				send: () => {}
			};
			controller = heroRouteController();
		});
		it('should execute the function', () => {
			const req = {
				hero: { remove: () => {} },
				body: {
					key: 'key',
					value: 'myValue'
				}
			};

			const changeSpy = sinon.spy(req.hero, 'remove');
			controller.deleter(req, res);
			expect(changeSpy.called).to.be.true;
		});
		it('should respond status 204 when the parameter exists', () => {
			const req = {
				hero: { remove: () => {} },
				body: {
					key: 'key',
					value: 'myValue'
				}
			};

			const deleterFake = sinon.fake.yields(false);
			sinon.replace(req.hero, 'remove', deleterFake);

			const sendDeleter = sinon.spy(res, 'send');

			controller.deleter(req, res);
			expect(sendDeleter.called).to.be.true;
		});
		it('should respond status 400 when the parameter exists', () => {
			const req = {
				hero: { remove: () => {} },
				body: {
					key: 'key',
					value: 'myValue'
				}
			};

			const deleterFake = sinon.fake.yields(true);
			sinon.replace(req.hero, 'remove', deleterFake);

			const sendDeleter = sinon.spy(res, 'send');

			controller.deleter(req, res);
			expect(sendDeleter.called).to.be.true;
		});
	});
	describe(' Get Controller', () => {
		it('should respond status 200 when the parameter exists', () => {
			const res = {
				json: () => {}
			};
			const controller = heroRouteController();
			const req = {
				hero: { save: () => {} },
				body: {
					key: 'key',
					value: 'myValue'
				}
			};

			const jsonSpy = sinon.spy(res, 'json');
			controller.get(req, res);
			expect(jsonSpy.called).to.be.true;
		});
	});
});
