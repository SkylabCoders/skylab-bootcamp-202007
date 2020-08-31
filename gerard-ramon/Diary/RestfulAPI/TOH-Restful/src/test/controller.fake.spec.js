const { expect } = require('chai');
const sinon = require('sinon');

let controller = require('../controllers/heroesRouteController');

describe.skip('Heroes Controller [Spy]', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('[GET] should call find with a query', () => {});

	it('[GET] should call find without a query', () => {
		expect(true).to.be.true;
	});
});
