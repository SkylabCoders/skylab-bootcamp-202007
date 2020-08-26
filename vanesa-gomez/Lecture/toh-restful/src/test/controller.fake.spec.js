const { expect } = require('chai');
const sinon = require('sinon'); // para poder crear Spy, mocks, stub, fakes...
const controller = require('../controllers/heroesRouteController');

describe.skip('Heroes Controller', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should call find a query', () => {
		const Hero = {
			find: () => {}
		};
		const req = {
			query: {
				id: 'myId'
			}
		};

		const res = {};

		const findFake = sinon.Fake(Hero, 'find');
		controller(Hero).get(req, res);
		// assetion es que el status haya sido llamado con 201;
		expect(findFake.called).to.be.true;
	});
});
