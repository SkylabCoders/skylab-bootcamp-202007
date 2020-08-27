const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/rootHeroRouteController');

describe('Heroes Controller Fake', () => {});
it('should respond with status 400', () => {});
it('should call find without query', () => {});
it('should call find with a query', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should respond with status 201', () => {
		const Hero = function () {
			this.find = () => {};
		};
		const req = {
			query: {
				id: 'myId'
			}
		};
		const res = {};
		const findFake = sinon.fake(res, 'find');

		controller(Hero).get(req, res);

		expect(findFake.callCount).to.be.true;
	});
});
