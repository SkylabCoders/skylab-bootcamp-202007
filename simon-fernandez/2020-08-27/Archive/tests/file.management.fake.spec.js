const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');
const fileManagement = proxyquire('../file.management', { fs });

describe('File Management Stub', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);

		const fileManagementt = proxyquire('../file.management', { fs });

		fileManagementt.createFile('test.txt');

		expect(writeFake.callCount).to.equal(1);
		expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
	});
});
