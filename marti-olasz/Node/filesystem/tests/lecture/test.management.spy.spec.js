const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

//const managment = proxyquire('../file.management');

xdescribe('File managment', () => {
	afterEach(() => sinon.restore());

	it('should create a new file', () => {
		const filename = 'filename';

		const writeFileSyncSpy = sinon.spy(fs, 'writeFileSync');
		const { createFile } = proxyquire('../file.management', { fs });

		createFile(filename);

		expect(writeFileSyncSpy.called).to.be.true;
	});

	it('should not create a file when there is no filename', () => {
		const writeFileSyncSpy = sinon.spy(fs, 'writeFileSync');
		const { createFile } = proxyquire('../file.management', { fs });

		try {
			createFile();
		} catch (err) {}

		expect(writeFileSyncSpy.called).to.be.false;
	});
});
