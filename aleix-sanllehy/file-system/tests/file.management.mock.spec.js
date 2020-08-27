const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');

describe.skip('MOCK - File Management', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('MOCK - 1.-Should create a new file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').once();

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		writeMock.verify();
	});

	it('MOCK - 2.-Should create a new file when there is a file with the same name', () => {
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

	it('MOCK - 3.-Should throw an error when creating an unnamed file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').never();

		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile();
		} catch (error) {
			writeMock.verify();
		}
	});
});
