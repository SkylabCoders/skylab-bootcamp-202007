const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('../controler/heroesRouteControler');

describe('Heroes controler', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('Spy GET should call find a query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {
			query: {
				id: '13'
			}
		};
		const res = {};
		const findFake = sinon.fake(Hero, 'find');

		controler(Hero).get(req, res);

		expect(findFake.called).to.be.true;
	});
});
