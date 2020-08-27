const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management ', () => {
	afterEach(() => {
		sinon.restore();
	});
	it.skip('should create a new file', () => {
		const filename = 'n';

		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const filemanagement = proxyquire('../file.management', { fs });

		filemanagement.createFile(filename);

		expect(writeSpy.called).to.be.true;
	});

	it('should not create a file when there is no filename', () => {
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const filemanagement = proxyquire('../file.management', { fs });

		try {
			filemanagement.createFile();
		} catch (error) {}

		expect(writeSpy.notCalled).to.be.true;
	});
});
