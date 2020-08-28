const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');
const fileManagement = proxyquire('../file.management', { fs });

describe('File Management Stub', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should getALlfiles and return a list of files', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.equal(['test.txt']);
		});
	});
	it('should return a list of file from getAllfilesPromise', () => {
		const readDirStub = sinon.stub(fs, 'readdir');
		const fileManagement = proxyquire('../file.management', { fs });

		const util = {
			promisify: null
		};

		//readDirStub.resolves(['test.txt']);

		fileManagement.getAllFilesPromise().then(() => {
			expect(files).to.be.eql(['text.txt']);
		});
	});
});
