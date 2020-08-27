const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('[STUB] File management stub', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should throw an error if file already exist', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		writeStub.throws(new Error('Filename is required!'));
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile('test.txt')).to.throw();
	});

	it('should create a file named test1.txt when text.txt already exists ', () => {
		const writeStub = sinon.stub(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });

		writeStub.withArgs('./data/test.txt').throws(new Error());

		fileManagement.createFileSafe('test.txt');

		expect(writeStub.calledWith('./data/test1.txt'));

		expect(writeStub.callCount).to.equal(2);
	});

	it('should getAllFiles and return a list of files', () => {
		const readdirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		// Li diem que executi la callback de readdir amb els params:
		// (error=null, callback=['test.txt'])
		readdirStub.yields(null, ['test.txt']);

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

		fileManagement
			.getAllFilesPromise()
			.then((files) => expect(files).to.eql(['test.txt']));
	});
});
