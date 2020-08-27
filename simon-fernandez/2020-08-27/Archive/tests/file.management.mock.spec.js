const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');
const fileManagement = proxyquire('../file.management', { fs });

describe('File Management Mock', () => {
	afterEach(() => {
		sinon.restore();
	});
	xit('should create a new file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').once();

		const fileManagementt = proxyquire('../file.management', { fs });

		fileManagementt.createFile('test.txt');

		writeMock.verify();
		expect(writeMock.calledWith('./data/test.txt', '')).to.be.true;
	});
});
