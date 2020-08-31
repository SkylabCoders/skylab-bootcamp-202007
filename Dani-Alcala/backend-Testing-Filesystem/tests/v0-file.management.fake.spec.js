const { expect } = require('chai');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');

describe.skip('File Management ', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a file', () => {
		const filename = 'test.txt';

		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake) //el fake no hace replace automatico de la funcion, hay q decirlo
		const filemanagement = proxyquire('../file.management', { fs });

		filemanagement.createFile(filename);

		expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
	});
});
