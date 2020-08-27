const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File management', () => {
	describe('Create file', () => {
		afterEach(() => sinon.restore());

		it('should create file', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const { createFile } = proxyquire('../file.management', { fs });

			const fileName = 'test.txt';
			createFile(fileName);

			expect(writeFileSyncStub.called).to.be.true;
		});

		it('should throw error if filename is missing', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const { createFile } = proxyquire('../file.management', { fs });

			try {
				createFile();
			} catch (err) {
				expect(writeFileSyncStub.called).to.be.false;
			}
		});
	});

	describe('Create File Safe', () => {
		afterEach(() => sinon.restore());

		it('should create file', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const { createFileSafe } = proxyquire('../file.management', { fs });

			const fileName = 'test.txt';
			createFileSafe(fileName);

			expect(writeFileSyncStub.calledWith('./data/test.txt')).to.be.true;
		});
		it('should throw error if filename is missing', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const { createFileSafe } = proxyquire('../file.management', { fs });

			try {
				createFileSafe();
			} catch (err) {
				expect(writeFileSyncStub.called).to.be.false;
			}
		});
		it('should createa file named test1.txt when text.txt already exists', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const readdirFake = sinon.fake.returns(['test.txt', 'test1.txt']);
			sinon.replace(fs, 'readdirSync', readdirFake);

			const { createFileSafe } = proxyquire('../file.management', { fs });

			writeFileSyncStub.withArgs('./data/test.txt').throws(new Error());

			const filename = 'test.txt';
			createFileSafe(filename);

			expect(writeFileSyncStub.calledWith('./data/test2.txt')).to.be.true;
		});

		it('should createa file named test1.txt when text.txt already exists', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const readdirFake = sinon.fake.returns([]);
			sinon.replace(fs, 'readdirSync', readdirFake);

			const { createFileSafe } = proxyquire('../file.management', { fs });

			writeFileSyncStub.withArgs('./data/test.txt').throws(new Error());

			const filename = 'test.txt';
			createFileSafe(filename);

			expect(writeFileSyncStub.calledWith('')).to.be;
		});
	});
	describe('Delete File', () => {
		afterEach(() => sinon.restore());

		it('should delete file', () => {
			const unlinkStub = sinon.stub(fs, 'unlinkSync');

			const { deleteFile } = proxyquire('../file.management', { fs });

			const fileName = 'test.txt';
			deleteFile(fileName);

			expect(unlinkStub.called).to.be.true;
		});
		it('should throw error if filename is missing', () => {
			const unlinkStub = sinon.stub(fs, 'unlinkSync');

			const { deleteFile } = proxyquire('../file.management', { fs });

			try {
				deleteFile();
			} catch (err) {
				expect(unlinkStub.called).to.be.false;
			}
		});
	});

	describe('Get File', () => {
		afterEach(() => sinon.restore());

		it('should find file', () => {
			const readFileSyncSpy = sinon.spy(fs, 'readFileSync');

			const { getFile } = proxyquire('../file.management', { fs });

			const fileName = 'test.txt';
			getFile(fileName);

			expect(readFileSyncSpy.called).to.be.true;
		});
		it('should throw error if filename is missing', () => {
			const readFileSyncSpy = sinon.spy(fs, 'readFileSync');

			const { getFile } = proxyquire('../file.management', { fs });

			try {
				getFile();
			} catch (err) {
				expect(err.message).to.equal('missing filename !_!');
			}
		});
	});

	describe('Get all files', () => {
		afterEach(() => sinon.restore());

		it('should get all files', () => {
			const readdirStub = sinon.stub(fs, 'readdir');

			const { getAllFiles } = proxyquire('../file.management', { fs });

			getAllFiles();

			expect(readdirStub.called).to.be.true;
		});
	});

	describe('Get all files promise', () => {
		afterEach(() => sinon.restore());

		it('should get all files promise', () => {
			const readdirStub = sinon.stub(fs, 'readdir');

			const { getAllFilesPromise } = proxyquire('../file.management', { fs });

			getAllFilesPromise();

			expect(readdirStub.called).to.be.true;
		});
	});

	describe('Save file', () => {
		afterEach(() => sinon.restore());

		it('should save file', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const { saveFile } = proxyquire('../file.management', { fs });

			const fileName = 'test.txt';
			saveFile(fileName);

			expect(writeFileSyncStub.called).to.be.true;
		});

		it('should throw error if filename is missing', () => {
			const writeFileSyncStub = sinon.stub(fs, 'writeFileSync');

			const { saveFile } = proxyquire('../file.management', { fs });

			try {
				saveFile();
			} catch (err) {
				expect(writeFileSyncStub.called).to.be.false;
			}
		});
	});
});
