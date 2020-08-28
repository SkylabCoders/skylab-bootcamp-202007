const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe.skip('File Management Stub', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a file', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		expect(writeStub.callCount).to.equal(1);
	});

	it('should create a file', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('Filename is require!'));
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile()).to.throw();
	});

	it('should a file named test1.txt when text.txt already exists', () => {
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

	it('should getAllfiles and return a list of files', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		readDirStub.yields(null, ['test.txt']);

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});

	it('should return a list of files from getAllFilesPromise', () => {
		const readdirStub = sinon.stub(fs, 'readdir');

		const util = {
			promisify: sinon.stub().returns(readdirStub)
		};
		const fileManagement = proxyquire('../file.management', { fs, util });

		readdirStub.resolves(['test.txt']);

		return fileManagement.getAllFilesPromise().then((files) => {
			expect(files).to.eql(['test.txt']);
		});
	});
});
