const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');

describe.skip('File Management ', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a file', () => {
		const filename = 'aaa';

		const writeStub = sinon.stub(fs, 'writeFileSync');
		const filemanagement = proxyquire('../file.management', { fs });

		filemanagement.createFile(filename);

		expect(writeStub.called).to.be.true;
	});

	it('should create a file - gestión del error', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('Filename is required'));
		const filemanagement = proxyquire('../file.management', { fs });

		expect(() => filemanagement.createFile()).to.throw();
	});

	it('should create a file named test1.txt when test.txt already exists', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const filemanagement = proxyquire('../file.management', { fs });

		writeStub
			.withArgs('./data/test.txt')
			.throws(
				new Error()
			); /* defino el comportamiento, hago ver q ya existe un fichero llamado así */ /*la primera vez*/

		filemanagement.createFileSafe('test.txt');

		expect(writeStub.calledWith('./data/test1.txt')).to.be.true;
	});

	it('should get all files and return a list of files', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const filemanagement = proxyquire('../file.management', { fs });

		readDirStub.yields(null, [
			'test.txt'
		]); /* invoca a la callback con estos dos argumentos */

		filemanagement.getAllFiles((error, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});

	it('should return a list of files from getAllFilesPromise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');

		const util = {
			promisify: sinon.stub().returns(readDirStub)
		};

		const filemanagement = proxyquire('../file.management', { fs, util });

		readDirStub.resolves(['test.txt']);

		return filemanagement
			.getAllFilesPromise()
			.then((files) => expect(files).to.eql(['text.txt']));
	});
});
