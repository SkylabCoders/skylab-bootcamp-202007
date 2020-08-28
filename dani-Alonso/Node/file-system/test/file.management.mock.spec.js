const { expect } = require('chai');
//const fileManagement = require('../file.management');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require('../file.management');
describe('File Management mock', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('Should create a new file', () => {
		// el mock lo que hace es mockear por completo de la dependencia
		const writeMock = sinon.mock(fs);
		// esperas de antemano que de esa función haya hecho algo. En este caso que se haya llamado una vez
		writeMock.expects('writeFileSync').once();
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFile('test.txt');
		writeMock.verify();
	});
	it.skip('Should create a new file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').args('./data/test.txt').throws();
		writeMock
			.expects('writeFileSync')
			.withArgs('./data/test1.txt')
			.returns(undefined);
		writeMock.expects('readdirSync').returns(['test.txt']);
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFileSafe('test.txt');
		writeMock.verify();
	});
	it('Should t', () => {
		// el mock lo que hace es mockear por completo de la dependencia
		const writeMock = sinon.mock(fs);
		// esperas de antemano que de esa función haya hecho algo. En este caso que se haya llamado una vez
		writeMock.expects('writeFileSync').once();
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFile('test.txt');
		writeMock.verify();
	});
	it('Should throw an error when creating a file without filename', () => {
		// el mock lo que hace es mockear por completo de la dependencia
		const writeMock = sinon.mock(fs);
		// esperas de antemano que de esa función haya hecho algo. En este caso que se haya llamado una vez
		writeMock.expects('writeFileSync').never();
		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile();
		} catch (error) {
			writeMock.verify();
		}
	});
});
