const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

xdescribe('Fake', () => {
	afterEach(() => sinon.restore());

	it('Create file', () => {
		const filename = 'test.txt';

		const writeFake = sinon.fake();
		sinon.replace(fs, 'writeFileSync', writeFake);
		const { createFile } = proxyquire('../file.management', { fs });

		createFile(filename);

		expect(writeFake.calledWith('./data/test.txt', '', { flag: 'wx' })).to.true;
	});
});
