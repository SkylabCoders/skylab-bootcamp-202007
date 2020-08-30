const { expect } = require('chai');
const sinon = require('sinon');

const controller = require('../controllers/heroesRouteController');

describe('Heroes Controller (with FAKE)', () => {
	afterEach(() => {
		sinon.restore();
	});
	xit('should call find with a query', () => {
		const Hero = function () {
			find = () => {};
		};
		const req = {
			query: {
				id: 'myId'
			}
		};

		const res = {};

		// Estamos aquí
		const findFake = sinon.fake();

		controller(Hero).post(req, res);

		expect(findFake.callCount).to.equal(1);
	});
	xit('should respond with status 400', () => {});
});
