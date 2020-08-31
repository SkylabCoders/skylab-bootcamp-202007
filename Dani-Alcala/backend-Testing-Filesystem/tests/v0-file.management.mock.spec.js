const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');

describe.skip('File Management ', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a file', () => {
		const filename = 'test.txt';

		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFilesSync').once();

		const filemanagement = proxyquire('../file.management', { fs });

		filemanagement.createFile(filename);

		writeMock.verify();
	});

	it('should create a new file when there is a file with the same name', () => {
		const filename = 'test.txt';

		const writeMock = sinon.mock(fs);

		writeMock.expects('writeFilesSync').args('/data/test.txt').throws();
		writeMock
			.expects('writeFilesSync')
			.args('/data/test1.txt')
			.returns(undefined);

			writeMock.expects('readdirSync').returns(['test.txt'])

		const filemanagement = proxyquire('../file.management', { fs });

		filemanagement.createFile(filename);

		writeMock.verify();
	});

	it('should throw an error when creating a file without a name', () => {
		const filename = 'test.txt';

		const writeMock = sinon.mock(fs);

		writeMock.expects('writeFilesSync').args('/data/test.txt').throws();
		writeMock
			.expects('writeFilesSync')
			.args('/data/test1.txt')
			.returns(undefined);

			writeMock.expects('readdirSync').returns(['test.txt'])

		const filemanagement = proxyquire('../file.management', { fs });

		filemanagement.createFile(filename);

		writeMock.verify();
	});
});
