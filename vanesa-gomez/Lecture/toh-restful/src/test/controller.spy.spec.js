const { expect } = require('chai');
const sinon = require('sinon'); // para poder crear spy, mocks, stub, fakes...
const controller = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
	it('Should work', () => {
		expect(true).to.be.true;
	});
});
