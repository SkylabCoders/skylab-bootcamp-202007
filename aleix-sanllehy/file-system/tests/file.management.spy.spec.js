const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('SPY - File Management', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('SPY - CREATE FILE - 1.- should create a new file', () => {
		// * no espiamos la funcion, sino algo (return por ejemplo)

		// configuración del escenario
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		// invocación de funciones
		fileManagement.createFile('test.txt');

		// afirmaciones o asserts
		expect(writeSpy.called).to.be.true;
		expect(writeSpy.calledWith('./data/test.txt')).to.be.true;
	});

	it('SPY - CREATE FILE - 2.- should not create a file when there is no filename', () => {
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile();
		} catch (error) {
			expect(writeSpy.notCalled).to.be.true;
		}
	});
});
