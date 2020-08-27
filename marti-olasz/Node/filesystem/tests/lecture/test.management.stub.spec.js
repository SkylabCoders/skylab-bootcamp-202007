const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

xdescribe('File managment', () => {
	afterEach(() => sinon.restore());

	it('should create a new file', () => {
		const filename = 'filename';

		const writeFileSyncSpy = sinon.stub(fs, 'writeFileSync');
		const { createFile } = proxyquire('../file.management', { fs });

		createFile(filename);

		expect(writeFileSyncSpy.callCount).to.equal(1);
	});

	it('should not create a file when there is no filename', () => {
		const writeFileSyncSpy = sinon.stub(fs, 'writeFileSync');
		writeFileSyncSpy.throws(new Error('missing filename !_!'));
		const { createFile } = proxyquire('../file.management', { fs });

		expect(() => createFile()).to.throw();
	});

	it('should createa file named test1.txt when text.txt already exists', () => {
		const writeFileSyncSpy = sinon.stub(fs, 'writeFileSync');
		const { createFileSafe } = proxyquire('../file.management', { fs });

		writeFileSyncSpy.withArgs('./data/test.txt').throws(new Error());

		const filename = 'test.txt';
		createFileSafe(filename);

		expect(writeFileSyncSpy.calledWith('./data/test1.txt')).to.be.true;
	});

	it('getAllFiles', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const { getAllFiles } = proxyquire('../file.management', { fs });

		readDirStub.yields(null, ['test.txt']);

		getAllFiles((err, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});

	it('getAllFilesPromise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');

		const util = { promisify: sinon.stub().returns(readDirStub) };

		const { getAllFilesPromise } = proxyquire('../file.management', {
			fs,
			util
		});

		readDirStub.resolves(['test.txt']);

		return getAllFilesPromise().then((files) => {
			expect(files).to.eql(['test.txt']);
		});
	});
});
