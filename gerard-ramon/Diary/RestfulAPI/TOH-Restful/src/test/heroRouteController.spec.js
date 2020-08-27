const sinon = require('sinon');
const { expect } = require('chai');

const heroController = require('../controllers/heroRouteController');

describe('Hero Controller', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('[GET] Should call json whith a req.hero ', () => {
		let req = {
			hero: 'bombasto'
		};

		let res = {
			json: () => {}
		};

		let jsonSpy = sinon.spy(res, 'json');

		heroController.get(req, res);

		expect(jsonSpy.called).to.be.true;
	});

	it('[GET] Should call send with an error with no req.hero ', () => {
		let req = {
			hero: null
		};

		let res = {
			json: () => {},
			send: () => {}
		};

		let jsonSpy = sinon.spy(res, 'json');
		let sendSpy = sinon.spy(res, 'send');

		heroController.get(req, res);

		expect(jsonSpy.called).to.be.false;
		expect(sendSpy.calledWith('Bad parameters')).to.be.true;
	});

	it('[PUT] Should call hero.save with a req.hero & a body.name', () => {
		let req = {
			hero: {
				save: () => {},
				name: null
			},
			body: {
				name: 'Santi'
			}
		};
		const saveSpy = sinon.spy(req.hero, 'save');

		let res = {};

		heroController.put(req, res);

		expect(saveSpy.called).to.be.true;
	});

	it('[PUT] Should NOT call hero.save without a body name', () => {
		let req = {
			hero: {
				save: () => {},
				name: null
			},
			body: {
				name: null
			}
		};
		const saveSpy = sinon.spy(req.hero, 'save');

		let res = {};

		heroController.put(req, res);

		expect(saveSpy.called).to.be.false;
	});

	it('[PUT] Should NOT hero.save without a req.body.name', () => {
		let req = {
			hero: {
				save: () => {},
				name: null
			},
			body: {
				name: null
			}
		};

		let res = {
			send: () => {}
		};

		let sendSpy = sinon.spy(res, 'send');

		heroController.put(req, res);

		expect(sendSpy.called).to.be.false;
	});

	it('[PATCH] Should call hero.save & _id', () => {
		let req = {
			hero: {
				save: () => {}
			},
			body: {
				_id: 13,
				name: null
			}
		};

		let res = {
			send: () => {}
		};

		const saveSpy = sinon.spy(req.hero, 'save');

		heroController.patch(req, res);

		expect(saveSpy.called).to.be.true;
	});

	it('[PATCH] Should call hero.save & no _id', () => {
		let req = {
			hero: {
				save: () => {}
			},
			body: {
				_id: null,
				name: null
			}
		};

		let res = {
			send: () => {}
		};

		const saveSpy = sinon.spy(req.hero, 'save');

		heroController.patch(req, res);

		expect(saveSpy.called).to.be.true;
	});

	it('[PATCH] Should NOT call hero.save with no req.body in request', () => {
		let req = {
			hero: {
				save: () => {}
			},
			body: null
		};

		let res = {
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');

		heroController.patch(req, res);

		expect(sendSpy.calledWith('Request must include a hero and a body')).to.be
			.true;
	});

	it('[DELETE] Should call hero.remove', () => {
		let req = {
			hero: {
				remove: () => {}
			}
		};

		let res = {};

		const removeSpy = sinon.spy(req.hero, 'remove');

		heroController.deleter(req, res);

		expect(removeSpy.called).to.be.true;
	});

	it('[DELETE] Should call res.send with no hero in req', () => {
		let req = {};

		let res = {
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');

		heroController.deleter(req, res);

		expect(sendSpy.calledWith('Request must include a hero')).to.be.true;
	});
});
