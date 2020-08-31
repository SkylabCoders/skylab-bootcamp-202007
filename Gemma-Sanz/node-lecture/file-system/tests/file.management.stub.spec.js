/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const proxyquire = require('proxyquire');

const fs = require('fs');
const { describe, afterEach, it, xit } = require('mocha');
const { expect } = require('chai');

describe('File Management (WITH STUB)', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a file', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		// al proxyquire le pasamos como primer argumento la ruta del arxivo y el 2o la dependencia
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		expect(writeStub.callCount).to.equal(1);
	});
	it('should create a file (example una mica forçat de stub)', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('Filename is required!'));
		// al proxyquire le pasamos como primer argumento la ruta del arxivo y el 2o la dependencia
		const fileManagement = proxyquire('../file.management', { fs });
		// aqui, tanto si le pasas un filename o no siempre va a lanzar un error, lo estamos forzando
		// Aquí estamos creando un assertion para este comporatmiento
		// Al STUB tenim que canviar el expect una mica
		expect(() => fileManagement.createFile()).to.throw();
	});
	xit('should create a file (intento con spy pero NO viable, tiene que ser con STUB)', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('Filename is required!'));
		const fileManagement = proxyquire('../file.management', { fs });

		try {
			fileManagement.createFile();
		} catch (error) {
			expect().to.throw();
		}
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
	it('should getAllfiles and return a list of a files', () => {
		// espiamos la fn que recibe
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		// es una fn generadora
		readDirStub.yields(null, ['test.txt']);

		// equal evalua el mismo valor, estrictamente, que apunte la mismo valor, no la array de readDirStub apunta a un sitio, y la del expect a  aunque apunten a un mismo string, son 2 valores distintos! Cada array es distinto! Es un objeto distinto!

		// Al testear un callback, se testea entrando dentro de la fn del callback, ponemos los argumentos qu ehay dentro el callback
		fileManagement.getAllFiles((error, data) => {
			//			expect(error).to.eql([]);
			expect(data).to.eql(['test.txt']);
		});
	});
	it('should return a list of files from getAllFilesPromise', () => {
		// ASI TESTEAMOS UNA PROMESA QUE DENTRO DEL GETALLFILESPROMISES QUE OCURRA ALGO, QUE SE RESUELVA LA PROMESA
		const readDirStub = sinon.stub(fs, 'readdir');

		const util = {
			// promisify nos tiene que devolver un stub
			promisify: sinon.stub().returns(readDirStub)
		};

		const fileManagement = proxyquire('../file.management', { fs, util });

		// aqui esperamos que nos devuelva una promesa y la resuelva con los valores ['text.txt]. Si promesa seria un return normal, y si queremos que rechazara la promes aun reject
		readDirStub.resolves(['test.txt']);

		// esperamos que el valor que nos devuelva en el then sea similar al de arrib

		return fileManagement
			.getAllFilesPromise()
			.then((files) => expect(files).to.eql(['test.txt']));
	});
});
// Los stubs reemplazan automaticamente a las fn originales y le definimos un comportamiento

// EL STUB NO CREA EL FICHERO; CONTROLA LOS EFECTOS 2ARIOS PRODUCIDOS POR EL MÉTODO
// El comportamiento predefinido del stub aquí es que lanze cada vez un error
// eql es un ==, un loose equality. Mientras que equal es un ===, un strict equality
