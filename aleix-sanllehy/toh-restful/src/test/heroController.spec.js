const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('Hero controller', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('GET - 1.- should get a hero', () => {
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

	it('PUT - 1.- should update a hero', () => {
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

	it('PUT - 1.- should update a hero - different approach', () => {
		const req = {
			hero: {
				save: () => {}
			},
			body: { name: 'sherar' }
		};

		const res = {
			json: () => {}
		};

		const jsonSpy = sinon.spy(res, 'json');

		const saveFake = sinon.fake.yields(null);

		sinon.replace(req.hero, 'save', saveFake);

		controller.put(req, res);

		expect(jsonSpy.called).to.be.true;
	});

	it('PUT - 2.- Should send an error if save does not work', () => {
		const req = {
			hero: {
				save: (error) => {}
			},
			body: { name: 'sherar' }
		};

		const res = {
			json: () => {},
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');
		const saveFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'save', saveFake);
		controller.put(req, res);

		expect(sendSpy.called).to.be.true;
	});

	it('PATCH - 1.- Should create a new hero', () => {
		const req = {
			body: {
				name: 'Bombasto'
			},
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

	it('PATCH - 2.- Should get an error if patch goes wrong', () => {
		const req = {
			body: {},
			hero: { save: () => {} }
		};

		const res = {
			json: () => {},
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');
		const saveFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'save', saveFake);
		controller.patch(req, res);
		expect(sendSpy.called).to.be.true;
	});

	it('DELETER - 1.- should delete a hero', () => {
		const req = {
			body: {},
			hero: {
				remove: (callback) => {
					callback();
				}
			}
		};

		const res = { json: () => {} };

		const removeSpy = sinon.spy(req.hero, 'remove');

		controller.deleter(req, res);
		expect(removeSpy.called).to.be.true;
	});

	it('DELETER - 2.- Should send an error if delete does not work', () => {
		const req = {
			body: {},
			hero: {
				remove: () => {}
			}
		};

		const res = {
			json: () => {},
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');
		const removeFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'remove', removeFake);
		controller.deleter(req, res);

		expect(sendSpy.called).to.be.true;
	});

	it('ELSE Scenario', () => {
		const req = {
			body: { name: 'sherar' }
		};

		const res = {
			json: () => {},
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');

		controller.put(req, res);
		controller.deleter(req, res);

		expect(sendSpy.called).to.be.false;
	});
});
