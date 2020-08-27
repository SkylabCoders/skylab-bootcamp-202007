const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');
const fileManagement = proxyquire('../file.management', { fs });

describe('File Management Stub', () => {
	afterEach(() => {
		sinon.restore();
	});

	xit('should create a file', () => {
		const writeSub = sinon.stub(fs, 'writeFileSync');
		fileManagement.createFile('test.txt');

		expect(writeSub.callCount).to.equal(1);
	});
});
