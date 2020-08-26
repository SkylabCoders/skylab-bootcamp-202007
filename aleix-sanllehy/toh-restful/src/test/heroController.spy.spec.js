const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('SPY - Hero controller', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('SPY - GET - 1.- should get a hero', () => {
		const req = {
			hero: {
				id: 1
			}
		};
		const res = { json: () => {} };

		const jsonSpy = sinon.spy(res, 'json');

		controller.get(req, res);
		expect(jsonSpy.calledWith(req.hero)).to.be.true;
	});

	it('SPY - PUT - 1.- should update a hero', () => {
		const req = {
			body: { name: 'Bombasto' },
			hero: {
				id: 1,
				save: (callback) => {
					callback();
				}
			}
		};

		const res = { json: () => {} };

		const jsonSpy = sinon.spy(res, 'json');
		const saveSpy = sinon.spy(req.hero, 'save');

		controller.put(req, res);
		expect(saveSpy.called).to.be.true;
		expect(jsonSpy.called).to.be.true;
	});

	it('SPY - DELETER - 1.- should delete a hero', () => {
		const req = {
			body: {},
			hero: {
				remove: (callback) => {
					callback();
				}
			}
		};

		const res = { json: () => {} };

		const jsonSpy = sinon.spy(res, 'json');
		const removeSpy = sinon.spy(req.hero, 'remove');

		controller.deleter(req, res);
		expect(removeSpy.called).to.be.true;
		expect(jsonSpy.called).to.be.true;
	});

	it('SPY - PATCH - 1.- Should create a new hero', () => {
		const req = {
			body: {},
			hero: {
				save: (callback) => {
					callback();
				}
			}
		};

		const res = { json: () => {} };

		const jsonSpy = sinon.spy(res, 'json');
		const saveSpy = sinon.spy(req.hero, 'save');

		controller.patch(req, res);
		expect(saveSpy.called).to.be.true;
		expect(jsonSpy.called).to.be.true;
	});
});
