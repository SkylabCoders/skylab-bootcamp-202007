const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require('../file.management');
const { isNull } = require('util');

describe.skip('File Management', () => {
	afterEach(() => {
		sinon.restore();
	});
	xit('should create a new file', () => {
		const writeStub = sinon.spy(fs, 'writeFileSync');
		const readDirStub = sinon.stub(fs, 'readdirSync');

		const fileManagementt = proxyquire('../file.management', { fs });

		fileManagementt.createFile('test.txt');

		expect(writeStub.called).to.be.true;
	});

	xit('should a file named text1.tx when test.txt alreadye xist', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');

		const readDirStub = sinon.stub(fs, 'readdirSync');
		const fileManagementt = proxyquire('../file.management', { fs });

		writeStub.withArgs('./data/test.txt').throws(new Error());
		writeStub.returns(undefined);
		readDirStub.returns(['test1.txt', 'test5.txt']);

		fileManagementt.createFile();

		expect(writeStub.threw()).to.be.true;
	});

	xit('should getAllfiles and return a list of files', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagementt = proxyquire('../file.management', { fs });

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.equal(['test.txt']);
		});
	});

	it('should return a list of files from getAllFilesPromise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs, utils });

		const util = {
			promisify: sinon.stub().returns(readDirStub)
		};

		readDirStub.resolves(['test.txt']);

		fileManagement.getAllFilesPromise().then((files) => {
			console.log('========', files);
			expect(files).to.eql(['test.txt']);
		});
	});
});
