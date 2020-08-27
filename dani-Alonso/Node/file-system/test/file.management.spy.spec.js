const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		// configuracion del escenario
		const writeSpy = sinon.spy(fs, 'writeFileSync');

		// invocar las funciones
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFile('test.txt');

		// afirmaciones
		expect(writeSpy.called).to.be.true;
	});

	it('should not create a file when there is no filename', () => {
		// configuracion del escenario
		const writeSpy = sinon.spy(fs, 'writeFileSync');

		// invocar las funciones
		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile();
		} catch (error) {}
		expect(writeSpy.notcalled).to.be.true;
	});
});
