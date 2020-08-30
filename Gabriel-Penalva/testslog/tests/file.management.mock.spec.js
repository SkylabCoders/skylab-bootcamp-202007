const { expect } = require('chai');
const proxyquire = require('proxyquire')
const fs = require('fs');
const sinon = require('sinon');

const fName = ('test.txt')
const errorMessage = 'Filename is required';
describe('File Magnament', () => {
    afterEach(() => {
        sinon.restore();
    })
    it('should create a new file', () => {

        const spyMock = sinon.mock(fs);
        spyMock.expects('writeFileSync').once();
        const fileSys = proxyquire('../file.management', { fs });

        fileSys.createFile(fName)

        spyMock.verify();

    });
    it('show create a new file when the file exists', () => {
        const spyMock = sinon.mock(fs);
        spyMock.expects('writeFileSync').withArgs(`./data/${fName}`).throws();
        spyMock
            .expects('writeFileSync')
            .withArgs('./data/test1.txt')
            .returns(undefined);
        spyMock.expects('readdirSync').returns([fName]);
        const fileSys = proxyquire('../file.management', { fs });
        fileSys.createFileSafe(fName);
        spyMock.verify();

    })
    it('should throw an error when creating a filw whithout a file name', () => {
        const spyMock = sinon.mock(fs);
        spyMock.expects('writeFileSync').never();
        const fileSys = proxyquire('../file.management', { fs });
        try {
            fileSys.createFile();

        } catch (err) {
            spyMock.verify()
        }
    })
});