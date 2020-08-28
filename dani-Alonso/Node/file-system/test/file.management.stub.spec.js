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

	it('should create a file name named test1.txt when text.txt already exists', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const readDirStub = sinon.stub(fs, 'readdirSync');
		const fileManagement = proxyquire('../file.management', { fs });
		// Definimos un comportamiento la 1a vez con el withArgs, pero la 2a ya es la del expect
		writeStub.withArgs('./data/test.txt').throws(new Error());
		// aqui decimos que la segunda vez que se ejectua devuelva undefined
		writeStub.returns(undefined);
		// aqui cuando llamen a este stub, el read va a devulver que ya existe
		readDirStub.returns(['test1.txt', 'test5.txt']);
		fileManagement.createFileSafe('test.txt');
		expect(writeStub.calledWith('./data/test6.txt')).to.be.true;
		expect(writeStub.callCount).to.equal(2);
	});

	it('should getAllFiles and return a list of files', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });
		fileManagement.getAllFiles((error, data) => {
			expect(data).to.equal(['text.txt']);
		});
	});
	it('should return a list of files from getAllFilesPromise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const util = {
			// “obligamos” que la promesa trabaje con el stub y nos devuelva ese stub declarado
			promisify: sinon.stub().returns(readDirStub)
		};
		// requerimos las dependencias
		const fileManagement = proxyquire('../file.management', { fs, util });
		// resolve porque queremos probar que se resuelve la promesa (reject si queremos que pete)
		readDirStub.resolves(['test.txt']);
		// lo importante es poner el expect dentro de la promesa para poder validar que se resuelve
		return fileManagement.getAllFilesPromise().then((files) => {
			expect(files).to.eql(['test.txt']);
		});
	});
});
