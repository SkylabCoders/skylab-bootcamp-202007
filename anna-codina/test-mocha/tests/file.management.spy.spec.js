const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('file Management SPY', () => {
	const errorMessage = 'Filename is require!';
	afterEach(() => {
		sinon.restore();
	});
	it.skip('should create a new file', () => {
		// setup
		const fileName = 'test.txt';
		const writeSpy = sinon.spy(fs, 'writeFileSync');

		// proxyquire debe ir DESPUES que el espia sino el test no pasa
		const fileManagement = proxyquire('../file.management', { fs });
		// invoke
		fileManagement.createFile(fileName);
		// asserts
		expect(writeSpy.called).to.be.true;
	});
	it('should not create file when there is no file name', () => {
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', { fs });
		try {
			fileManagement.createFile();
		} catch (error) {
			expect(writeSpy.notCalled).to.be.true;
			expect(error.message).to.be.equal(errorMessage);
		}
	});
});
