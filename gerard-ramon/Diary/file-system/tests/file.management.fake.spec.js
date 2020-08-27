const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('[FAKE] File management', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a new file', () => {
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile('test.txt');

		expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
	});

	it('should throw an exception when a file already exists', () => {
		// Preparem el fake (com que es inmutable, has de declarar el comportament abans d'invocarlo)
		const writeFake = sinon.fake.throws(new Error());

		// Li diem sobre quina funcio s'aplica el fake i quina variable es (writeFake del final)
		sinon.replace(fs, 'writeFileSync', writeFake);

		//Carreguem les dependencies
		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => filemanagement.createFile('test.txt')).to.throw();
	});

	it('should return a list of files', () => {
		const readDirFake = sinon.fake();

		sinon.replace(fs, 'readdir', readDirFake);
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.eql(['test.txt']);
		});
	});
});
