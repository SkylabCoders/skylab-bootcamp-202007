const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it.skip('should respond with status 201', () => {});

	it.skip('should respond with status 400', () => {});

	it.skip('should call find without query', () => {});

	it('should call find with a query', () => {});
});
