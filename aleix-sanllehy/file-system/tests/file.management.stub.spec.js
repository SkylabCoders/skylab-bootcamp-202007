const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe.skip('STUB - File Management', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('STUB - 1.- Should create a new file', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		expect(writeStub.callCount).to.equal(1);
	});

	it('STUB - 2.- Should not create an unnamed file', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('filename is required!'));
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile()).to.throw();
	});

	it('STUB - 3.- Should create a file named test1.text qhen test.text already exists', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const readDirStub = sinon.stub(fs, 'readdirSync');
		const fileManagement = proxyquire('../file.management', { fs });

		writeStub.withArgs('./data/test.txt').throws(new Error());
		writeStub.returns(undefined);
		readDirStub.returns(['test1.txt', 'test5.txt']);

		fileManagement.createFileSafe('test.txt');

		expect(writeStub.calledWith('./data/test6.txt')).to.be.true;
		expect(writeStub.callCount).to.equal(2);
	});

	it('STUB - 4.- Should get all files and return a list of files', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		// * IMPORTANT, RESEARCH REDUX-SAGA
		readDirStub.yields(null, ['test.txt']);

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});

	it('STUB - 5.- Should return a list of files from getAllFilesPromise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');

		const util = {
			promisify: sinon.stub().returns(readdirStub)
		};

		const fileManagement = proxyquire('../file.management', { fs, util });

		readDirStub.resolves(['test.txt']);

		return fileManagement.getAllFilesPromise().then((files) => {
			expect(files).to.eql(['test.txt']);
		});
	});
});
