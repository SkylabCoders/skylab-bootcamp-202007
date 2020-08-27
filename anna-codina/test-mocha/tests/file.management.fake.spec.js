const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File Management Fake', () => {
	const errorMessage = 'Filename is require!';
	const fileName = 'test.txt';
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);

		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.createFile(fileName);

		expect(writeFake.calledOnce).to.be.true;
		expect(writeFake.calledWith(`./data/${fileName}`, '')).to.be.true;
	});
	it('should throw an esception when a file already exists', () => {
		// los fakes no podemos redefinir (es inmutable) asi que cuando los creamos tenemos que
		// definir el comportamiento a la vez. Pero OJO no podemos hacer .fake().comportamiento()
		// no concatenamos con la funcion sino con la PROPIEDAD fake
		const writeFake = sinon.fake.throws(new Error());
		sinon.replace(fs, 'writeFileSync', writeFake);

		const fileManagement = proxyquire('../file.management', { fs });

		expect(() => {
			fileManagement.createFile(fileName);
		}).to.throw();
	});
	it('async with yeld: should getAllfils and return a list of files', () => {
		const readDirFake = sinon.fake.yields(null, [fileName]);
		sinon.replace(fs, 'readdir', readDirFake);
		const fileManagement = proxyquire('../file.management', { fs });

		fileManagement.getAllFiles((error, data) => {
			expect(data).to.eql([fileName]);
		});
	});
});
