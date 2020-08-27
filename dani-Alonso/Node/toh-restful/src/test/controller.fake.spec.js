const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/hero/heroesRouteController');

describe('Heroes controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	xit('[POST]sould call status only once,', () => {
		const Hero = {
			find: () => {}
		};
		const req = {
			query: {
				id: 'myId'
			}
		};
		const res = {};

		const findFake = sinon.fake(Hero, 'find');
		controller(Hero).get(req, res);

		// assertion es que el status 201
		expect(findFake.called).to.be.true;
	});
	it('sould call find without query', () => {});
	it('sould call find with a query', () => {});
});
