const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File Management stub', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		// configuracion del escenario
		const writeStub = sinon.stub(fs, 'writeFileSync');

		// invocar las funciones
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFile('test.txt');

		// afirmaciones
		expect(writeStub.callCount).to.equal(1);
	});

	it('should not create a file when there is no filename', () => {
		// configuracion del escenario
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('Filename is requiredd'));
		// invocar las funciones
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile('test.txt')).to.throw();
	});
});
