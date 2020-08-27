const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe('File Mangament STUB', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should create a file', () => {

        // set up
        const writeStub = sinon.stub(fs, 'writeFileSync');
        writeStub.throws(new Error('filename is required!'))     // simulamos este comportamiento -> obligamos a lanzar el error
        const fileManagement = proxyquire('../file.management', { fs });

        // invoke
        // fileManagement.createFile('test.txt');

        // asserts
        // expect(writeStub.callCount).to.equal(1);
        // expect(fileManagement.createFile('test.txt')).to.throw();
        expect(() => fileManagement.createFile()).to.throw();        // cazamos el error?

    });

    it('should create a file named test1.txt when text.txt already exists', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        writeStub.withArgs('./data/test.txt').throws(new Error());


        fileManagement.createFileSafe('test.txt')

        expect(writeStub.calledWith('./data/test1.txt')).to.be.true;
    });

    it('should getAllfiles and return a list of files', () => {
        const readdirStub = sinon.stub(fs, 'readdir');
        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.getAllFiles((error, data) => {
            expect(data).to.equal([test.txt])
        });

    });

    it('should return a list of files from getAllFilesPromise', () => {
        const readdirStub = sinon.stub(fs, 'readdir');

        const util = {
            promisify: sinon.stub().returns(readdirStub)
        }

        const fileManagement = proxyquire('../file.management', { fs, util });
        readdirStub.resolves(['test.txt']);

        return fileManagement
            .getAllFilesPromise()
            .then((files) => expect(files).to.eql(['test.txt']));

    });


});
