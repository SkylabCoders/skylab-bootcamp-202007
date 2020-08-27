const sinon = require('sinon');
const proxyquire = require('proxyquire');

const fs = require('fs');
const { describe, afterEach, it, xit } = require('mocha');
const { expect } = require('chai');

// EL FAKE AUTOMATICAMENTE NO REEMPLAZA AL MÉTODO QUE QUEREMOS USAR
describe('File Management (WITH FAKE)', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		// expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
		expect(writeFake.callCount).to.equal(1);
	});
	it('should throw an exception when a file already exists', () => {
		// testegem ln
		// definimos fake, reemplazamos la fn original con la false y luego cargamos el módulo y finalmente invocamos una fn para hacer la expectation
		// Quan definim un fake al mateix moment hem de definir el seu comportament, perque es IMMUTABLE
		// com és immutable tenim que tirer de la propietat, i no de la invocació del fake

		const writeFake = sinon.fake.throws(new Error());
		sinon.replace(fs, 'writeFileSync', writeFake);
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile('test.txt')).to.throws();
	});
	it('should return a list of files', () => {
		const readDirFake = sinon.fake.yields(null, ['test.txt']);

		sinon.replace(fs, 'readdir', readDirFake);

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});
});
