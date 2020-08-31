const { expect } = require('chai');
const proxyquire = require('proxyquire')
const fs = require('fs');
const sinon = require('sinon');

const fName = ('test.txt')
const errorMessage = 'Filename is required';
describe('File Magnament', () => {
    afterEach(() => {
        sinon.restore();
    });
    it('should create a new file', () => {

        const spyFake = sinon.fake();
        sinon.replace(fs, 'writeFileSync', spyFake)
        const fileSys = proxyquire('../file.management', { fs });

        fileSys.createFile(fName)

        // expect(!!fileSys.getFile(fName)).to.be.true;
        expect(spyFake.callCount).to.equal(1);
        expect(spyFake.calledWith(`./data/${fName}`, '')).to.be.true
        // no crea el arxiu perque stub no crea accions secundaries
    });
    it('should throw an exception when file exists', () => {

        const spyFake = sinon.fake.throws(new Error());
        sinon.replace(fs, 'writeFileSync', spyFake)
        const fileSys = proxyquire('../file.management', { fs });

        // hay que usarlo en la declaracion spyFake.throws(new Error());

        expect(() => fileSys.createFile(fName)).to.throw();
    });
    it('should return a list of files', () => {

        const spyFake = sinon.fake.yields(null, [fName]);
        sinon.replace(fs, 'readdir', spyFake)
        const fileSys = proxyquire('../file.management', { fs });

        // hay que usarlo en la declaracion spyFake.throws(new Error());

        fileSys.getAllFiles((err, data) => {
            expect(data).to.eql([fName]);
        })
    });
});