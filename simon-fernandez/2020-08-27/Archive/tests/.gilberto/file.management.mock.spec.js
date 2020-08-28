const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe('File Management Mock', () => {
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

	it('should create a new file when there is a file with the same name', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();
		writeMock
			.expects('writeFileSync')
			.withArgs('./data/test1.txt')
			.returns(undefined);
		writeMock.expects('readdirSync').returns(['test.txt']).once();

		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFileSafe('test.txt');

		writeMock.verify();
	});

	it('should throw an error when creating a file without filename', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').once();

		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile('kjgaskdgas');
		} catch (error) {
			writeMock.verify();
		}
	});
});
