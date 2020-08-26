const sinon = require('sinon');

const heroRouteController = require('../controllers/heroRouteController');
const { expect } = require('chai');

describe('Hero Route Controller', () => {
	describe(' PUT', () => {
		let req = null;
		let res = null;
		let controller;

		beforeEach(() => {
			res = {
				json: sinon.spy(),
				send: sinon.spy()
			};
			controller = heroRouteController();
		});
		it('should respond status 200 when the parameter exists', () => {
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

		xit('should respond status 400 when the parameter exists', () => {
			const error = 'error';
			req = {
				hero: {
					save: () => {}
				},
				body: {}
			};
			res = {
				send: (error) => error
			};
			const changeSpy = sinon.spy(res, 'send');
			controller.put(req, res);

			expect(changeSpy.called).to.be.true;
		});
	});
	describe(' Patch Controller', () => {
		let req = null;
		let res = null;
		let controller;
		beforeEach(() => {
			res = {
				json: sinon.spy(),
				send: sinon.spy()
			};
			controller = heroRouteController();
		});
		it('should respond status 200 when the parameter exists', () => {
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
	});
	describe(' Deleter Controller', () => {
		let req = null;
		let res = null;
		let controller;
		beforeEach(() => {
			res = {
				json: sinon.spy(),
				send: sinon.spy()
			};
			controller = heroRouteController();
		});
		it('should respond status 204 when the parameter exists', () => {
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
		xit('should respond status 204 when the parameter exists', () => {
			const req = {
				hero: { remove: () => {} },
				body: {
					key: 'key',
					value: 'myValue'
				}
			};
			res = {
				send: () => {}
			};
			const changeSpy = sinon.spy(res, 'send');
			controller.deleter(req, res);
			expect(changeSpy.called).to.be.true;
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
