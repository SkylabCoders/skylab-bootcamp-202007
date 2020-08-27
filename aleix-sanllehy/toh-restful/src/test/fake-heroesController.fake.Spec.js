const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe('FAKE - Heroes controller', () => {
	afterEach(() => {
		sinon.restore();
	});

	xit('FAKE - POST - should respond with status 201', () => {});

	xit('FAKE - POST - should respond with status 400', () => {});

	xit('FAKE - GET - should call find without query', () => {});

	xit('FAKE - GET - should call find with a query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {
			query: {
				id: 'myId'
			}
		};

		const res = {};
		//TODO
		const findFake = sinon.fake(Hero, 'find');
		controller(Hero).get(req, res);
		expect(findFake.called).to.be.true;
	});
});
