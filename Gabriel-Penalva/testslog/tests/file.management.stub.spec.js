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

        const spyStub = sinon.stub(fs, 'writeFileSync');
        const fileSys = proxyquire('../file.management', { fs });

        fileSys.createFile(fName)

        // expect(!!fileSys.getFile(fName)).to.be.true;
        expect(spyStub.callCount).to.equal(1);
        // no crea el arxiu perque stub no crea accions secundaries
    });
    xit('should not create a file', () => {
        const spyStub = sinon.stub(fs, 'writeFileSync');
        spyStub.throws(new Error('mal, ha pasao!'));
        const fileSys = proxyquire('../file.management', { fs });


    })
    it('should a file named test.txt when test.txt already exists', () => {
        const spyStub = sinon.stub(fs, 'writeFileSync');
        const fileSys = proxyquire('../file.management', { fs });

        spyStub.withArgs(`./data/${fName}`).throws(new Error())

        fileSys.createFileSafe(fName)

        expect(spyStub.calledWith('./data/test1.txt')).to.be.true
    })
    it('should getAllfiles and return a list of files', () => {
        const readDirStub = sinon.stub(fs, 'readdir');
        const fileSys = proxyquire('../file.management', { fs });

        readDirStub.yields(null, ['test.txt'])

        fileSys.getAllFiles((err, data) => {
            expect(data).to.deep.equal([fName])
        })

    })
    it('should getAllfilesPromise and return a list of files', () => {
        const readDirStub = sinon.stub(fs, 'readdir');
        const util = {
            promisify: sinon.stub().returns(readDirStub)
        }

        const fileSys = proxyquire('../file.management', { fs, util });


        readDirStub.resolves([fName])

        return fileSys.getAllFilesPromise()
            .then((files) => { expect(files).to.eql([fName]) })

    })
});