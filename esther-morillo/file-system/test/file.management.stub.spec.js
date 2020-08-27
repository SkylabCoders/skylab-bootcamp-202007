const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');
const fs = require('fs')

describe('File Management Stub', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should create a file', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        writeStub.throws(new Error('Filename is required!'))
        const fileManagement = proxyquire('../file.management', { fs });

        expect(() => fileManagement.createFile()).to.throw();
    });

    it('should a file named test1.txt when text.txt already exist', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        //f forzamos que al ejecutar la función withArgs lace un error, no lo que pone la función
        writeStub.withArgs('./data/test.txt').throws(new Error());
        // y la segunda vez que se invoque que retorne undefined
        writeStub.returns(undefined);
        

        fileManagement.createFileSafe('test.txt');

        expect(writeStub.calledWith('./data/test1.txt')).to.be.true;
        expect(writeStub.callCount).to.equal(2);
    });

    it('should getAllFiles and return a list of files', () => {
        const readDirStub = sinon.stub(fs, 'readdir');
        const fileManagement = proxyquire('../file.management', { fs });

        readDirStub.yields([], ['test.txt'])

        fileManagement.getAllFiles((error, data) => {
            expect(data).to.eql(['test.txt']);
        })
    });

    it('should return a list of files from getAllFilesPromise', () => {
        const readDirStub = sinon.stub(fs, 'readdir');
        
        // promesa
        const util = {
            promisify: sinon.stub().returns(readDirStub)
        };
        
        const fileManagement = proxyquire('../file.management', { fs, util });

        readDirStub.resolves(['test.txt'])

        // que solo qse haga el expect después de que retorne la promesa
        return fileManagement
        .getAllFilesPromise()
        .then((files) => expect(files).to.eql(['test.txt']));
    });
})