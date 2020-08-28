const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management Spy', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a new file', () => {
		// setup
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		// invoke
		fileManagement.createFile('test.txt');

		// asserts
		expect(writeSpy.called).to.be.true;
		expect(writeSpy.calledWith('./data/test.txt')).to.be.true;
	});

	it('should not create a file when there is no filename', () => {
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile();
		} catch (error) {
			expect(writeSpy.notCalled).to.be.true;
		}
	});
});
