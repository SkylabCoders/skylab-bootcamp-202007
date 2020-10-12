const routes = require('./../routes/categoriesRoutes');
const {expect} = require('chai');
const {describe} = require('mocha');

describe('Categories router scenario', () => {

	it('should match', () => {
		expect(routes('test')).to.exist;
	});
});
