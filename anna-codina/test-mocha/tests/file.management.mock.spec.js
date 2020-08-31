const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File Management Mock', () => {
	const errorMessage = 'Filename is require!';
	const fileName = 'test.txt';
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		const writeMock = sinon.mock(fs);
		// se pone el expects ANTES de la construcción de la situacion
		writeMock.expects('writeFileSync').once();

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile(fileName);

		// finalmente verificamos que se hayan cumplierto las verificaciones
		writeMock.verify();
	});
	it('should create a new file when there is a file with the same name', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').withArgs(`./data/${fileName}`).throws();
		writeMock
			.expects('writeFileSync')
			.withArgs(`./data/test1.txt`)
			.returns(undefined);
		writeMock.expects('readdirSync').returns([fileName]).once();

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFileSafe(fileName);
		writeMock.verify();
	});
	it('should throw an error when creating a file without a  fileName', () => {
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
