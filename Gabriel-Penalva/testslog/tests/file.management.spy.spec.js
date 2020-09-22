const { expect } = require('chai');
const proxyquire = require('proxyquire')
const fs = require('fs');
const fName = ('text.txt')
const sinon = require('sinon');
const errorMessage = 'Filename is required';
describe('File Magnament', () => {
    afterEach(() => {
        sinon.restore();
    })
    it('should create a new file', () => {

        const spy = sinon.spy(fs, 'writeFileSync');
        const fileSys = proxyquire('../file.management', { fs });


        fileSys.createFile(fName)

        // expect(!!fileSys.getFile(fName)).to.be.true;
        expect(spy.called).to.be.true;
        fileSys.deleteFile(fName);
    })
    it('Should not create a file when isnot a filename', () => {
        const spy = sinon.spy(fs, 'writeFileSync');
        const fileSys = proxyquire('../file.management', { fs });

        try {
            fileSys.createFile();

        } catch (error) {
            expect(error.message).to.equal(errorMessage)
        }
        expect(spy.notCalled).to.be.true
    })
})