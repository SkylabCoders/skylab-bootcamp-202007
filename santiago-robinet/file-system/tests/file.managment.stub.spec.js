const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe.skip('File Management', () => {
	afterEach(() => {
		sinon.restore();
    });
    
	it('should create a new file', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
		const fileManagement = proxyquire('../file.management', {fs});
        
        fileManagement.createFile('test.txt');

        expect(writeStub.callCount).to.equal(1);
    });
    
	it('should create a new file', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        writeStub.throws(new Error('Filename is require!'))
		const fileManagement = proxyquire('../file.management', {fs});
        
        
        expect(() => fileManagement.createFile('test.txt')).to.throw();
    });
    
    it('should create a file named test1.txt when text.txt already exist', () => {
        const writeStub = sinon.stub(fs, 'writeFileSync');
        const readDirStub = sinon.stub(fs, 'readdirSync');
        const fileManagement = proxyquire('../file.management', {fs});
        
        writeStub.withArgs('./data/test.txt').throws(new Error());
        writeStub.returns(undefined);
        readDirStub.returns(['test1.txt', 'test2.txt'])


        fileManagement.createFileSafe('test.txt')

        expect(writeStub.calledWith('./data/test3.txt'));
        expect(writeStub.callCount).to.equal(2);
    })

    it('should getAllFiles and return a list of files', () => {
        const readDirStub = sinon.stub(fs, 'readdir');
        const fileManagement = proxyquire('../file.management', {fs});

        readDirStub.yields(null, ['test.txt'])

        fileManagement.getAllFiles((error, data) =>{
            expect(data).to.eql(['test.txt'])
        })

    })

    it('should return a list of files from getAllFilesPromise', () => {
        const readDirStub = sinon.stub(fs, 'readdir');
        
        const util= {
            promisify: sinon.stub().returns(readDirStub)
        }
        
        const fileManagement = proxyquire('../file.management', { fs, util });
        readDirStub.resolves(['test.txt'])

        return fileManagement.getAllFilesPromise().then((files) => {
            console.log('==============>>>>>>>')
            expect(files).to.eql(['test.txt'])})

    })

});
