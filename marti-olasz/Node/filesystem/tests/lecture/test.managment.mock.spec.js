const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

xdescribe('Mock', () => {
	afterEach(() => sinon.restore());

	it('Create file', () => {
		const filename = 'filename';

		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').once();

		const { createFile } = proxyquire('../file.management', { fs });

		createFile(filename);

		writeMock.verify();
	});

	it('Create file safe', () => {
		const filename = 'test.txt';

		const writeMock = sinon.mock(fs);

		writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();
		writeMock.expects('writeFileSync').withArgs('./data/test1.txt').returns(1);
		writeMock.expects('readdirSync').returns(['test.txt']).once();

		const { createFileSafe } = proxyquire('../file.management', { fs });

		createFileSafe(filename);

		writeMock.verify();
	});
});
