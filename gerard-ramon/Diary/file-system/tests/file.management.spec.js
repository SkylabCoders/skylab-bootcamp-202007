const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('[SPY] File management', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a new file', () => {
		// setup
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		// Invoke
		fileManagement.createFile('test.txt');

		// Assertions
		expect(writeSpy.called).to.be.true;
	});
});
