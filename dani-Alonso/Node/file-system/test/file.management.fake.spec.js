const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File Management fake', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		// configuracion del escenario
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);
		// invocar las funciones
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.createFile('test.txt');

		// afirmaciones
		expect(writeFake.callCount).to.equal(1);
		expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
	});
	it('throw an exception when a file already exists', () => {
		// configuracion del escenario
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);
		// invocar las funciones
		const fileManagement = proxyquire('../file.management', { fs });

		writeFake.throws(new Error());
		expect(() => fileManagement.createFile('test.txt')).to.throw;
	});
});
