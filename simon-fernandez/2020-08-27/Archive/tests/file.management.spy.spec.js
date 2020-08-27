const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should create a new file', () => {
		const writeSpy = sinon.spy(fs, 'writeFileSync');
		const readDirStub = sinon.stub(fs, 'readdirSync');

		const fileManagementt = proxyquire('../file.management', { fs });

		fileManagementt.createFile('test.txt');

		expect(writeSpy.called).to.be.true;
	});

	it('should a file named text1.tx when test.txt alreadye xist', () => {
		const writeSpy = sinon.spy(fs, 'writeFileSync');

		const readDirStub = sinon.stub(fs, 'readdirSync');
		const fileManagementt = proxyquire('../file.management', { fs });

		write;

		fileManagementt.createFile();

		expect(writeSpy.threw()).to.be.true;
	});
});
