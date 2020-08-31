const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management Mock', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should create a new file', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').once();
        
		const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.createFile('test.txt');

		writeMock.verify();
	});

	it('should create a new file when there is a file with the same name', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();
		writeMock.expects('readdirSync').returns(['test.txt']).once();
		writeMock.expects('writeFileSync').withArgs('./data/test1.txt').returns(undefined);

        
		const fileManagement = proxyquire('../file.management', { fs });
        fileManagement.createFileSafe('test.txt');

		writeMock.verify();
	});

	it('should throw an error when creating a file without filename', () => {
		const writeMock = sinon.mock(fs);
		writeMock.expects('writeFileSync').never();

		const fileManagement = proxyquire('../file.management', { fs });

		try{
			fileManagement.createFile();
		} catch (error){
			writeMock.verify();
		}
 
	})
});
