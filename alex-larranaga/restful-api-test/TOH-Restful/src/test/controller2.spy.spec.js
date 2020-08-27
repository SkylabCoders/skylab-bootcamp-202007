const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('HERO CONTROLLER', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('GET METHOD 1: should get all heroes', () => {
		const req = {
			hero: { id: 1 }
		};
		const res = {
			json: () => {}
		};

		const getSpy = sinon.spy(res, 'json');

		controller.get(req, res);

		expect(getSpy.called).to.be.true;
	});

	it('PUT METHOD 1: Showl return a hero', () => {
		const req = {
			hero: {
				id: 1,
				save: () => {}
			},
			body: {
				name: 'Name'
			}
		};
		const res = {
			json: () => {}
		};

		const jsonSpy = sinon.spy(req.hero, 'save');

		controller.put(req, res);
		expect(jsonSpy.called).to.be.true;
	});
});
