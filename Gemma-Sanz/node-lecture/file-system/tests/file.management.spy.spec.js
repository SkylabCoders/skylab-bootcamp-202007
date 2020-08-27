const { expect } = require('chai');

// si el eslint chirria podem importar de mocha describe i it, pero en teoria no hauria de chirriar
const { describe, it } = require('mocha');

const sinon = require('sinon');
const fileManagement = require('../file.management');

describe('File Management', () => {
	it('should create a new file', () => {
		const filename = 'newFile.txt';

		const writeFileSync = sinon.spy();

		fileManagement.createFile(filename);
		expect(writeFileSync.callCount).to.equal(1);
	});
	it('should not create a file when there is no filename', () => {
		const filename = null;

		const writeFileSync = sinon.spy();

		fileManagement.createFile(filename);
		expect(writeFileSync.callCount).to.equal(1);
	});
});
