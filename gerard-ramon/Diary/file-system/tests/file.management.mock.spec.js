const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('[FAKE] File management', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a new file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').once();
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		writeMock.verify();
	});

	it('should create a file when there is a file with the same name', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();
		writeMock
			.expects('writeFileSync')
			.withArgs('./data/test1.txt')
			.returns(undefined);

		writeMock.expects('readdirSync').returns(['test.txt']);

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFileSafe('test.txt');

		writeMock.verify();
	});

	it('should throw an error when creating a file without a file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').never();

		const fileManagement = proxyquire('../file.management', { fs });

		try {
			filemanagement.createFile();
		} catch (error) {
			writeMock.verify();
		}
	});
});
