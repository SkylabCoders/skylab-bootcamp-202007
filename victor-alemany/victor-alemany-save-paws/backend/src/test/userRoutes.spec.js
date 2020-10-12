const routes = require('./../routes/userRoutes');
const {expect} = require('chai');
const {describe} = require('mocha');

describe('User router scenario', () => {

	it('should match', () => {
		expect(routes('test')).to.exist;
	});
});
