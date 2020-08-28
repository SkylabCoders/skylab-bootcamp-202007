const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('file Management STUB', () => {
	const errorMessage = 'Filename is require!';
	const fileName = 'test.txt';
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		// setup
		// CON STUB NO SE CREA EL FICHERO AL CONTRARIO DEL SPY
		const writeStub = sinon.stub(fs, 'writeFileSync');

		// proxyquire debe ir DESPUES que el espia sino el test no pasa
		const fileManagement = proxyquire('../file.management', { fs });
		// invoke
		fileManagement.createFile(fileName);
		// asserts
		expect(writeStub.calledOnce).to.be.true;
	});
	it('should not create file when there is no file name', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error(errorMessage));
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile(fileName)).to.throw;
	});
	it('should should a file named test1.txt when text.txt already exist', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		writeStub.withArgs('./data/test.txt').throws(new Error());

		fileManagement.createFileSafe('test.txt');

		expect(writeStub.calledWith(`./data/test1.txt`)).to.be.true;
	});
	it('should getAllfiles and return a list of files V1', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		readDirStub.yields(null, ['test.txt']);

		fileManagement.getAllFiles((error, data) => {
			// tenemos qu eposar una igualdad no estricta para evitar que
			// nos poete por que dos arrais que apunten al mimo valor siguen
			// siendo dos arrais diferentes.
			expect(data).to.eql(['test.txt']);
		});
	});

	// como testear una promesa MODELO
	it('should getAllfiles and return a list of files V2 with promise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');

		const util = {
			promisify: sinon.stub().returns(readDirStub)
		};
		const fileManagement = proxyquire('../file.management', { fs, util });
		// como es una promesa tenemos que RESOLVER con lo que necesitamos.
		// las funciones usan el return
		// y en errores hacemos el Throw
		readDirStub.resolves(['test.txt']);

		// es iportante hacer return porque sino el test pasara aun cuando este mal
		return fileManagement
			.getAllFilesPromise()
			.then((files) => expect(files).to.eql(['test.txt']));
	});
});
