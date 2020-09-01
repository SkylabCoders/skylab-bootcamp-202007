const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe('FAKE - File Management', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('FAKE - 1.-Should create a new file', () => {
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		expect(writeFake.callCount).to.equal(1);
		expect(writeFake.calledWith('./data/test.txt', '', { flag: 'wx' })).to.be
			.true;
	});

	it('FAKE - 2.- Should throw an exception when a file already exists', () => {
		const writeFake = sinon.fake.throws(new Error());
		sinon.replace(fs, 'writeFileSync', writeFake);
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => fileManagement.createFile('test.txt')).to.throw();
	});

	it('FAKE - 3.- Should get all files and return a list of files', () => {
		const readDirFake = sinon.fake.yields(null, ['test.txt']);
		sinon.replace(fs, 'readdir', readDirFake);
		const fileManagement = proxyquire('../file.management', { fs });

		// * IMPORTANT, RESEARCH REDUX-SAGA
		fileManagement.getAllFiles((error, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});
});
