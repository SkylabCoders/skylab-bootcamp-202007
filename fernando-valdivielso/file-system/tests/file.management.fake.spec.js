const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe('File Management Fake', () => {
    afterEach(() => {
        sinon.restore();
    });

    it.skip('should create a new file', () => {
        const writeFake = sinon.fake();
        sinon.replace(fs, 'writeFileSync', writeFake);
        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.createFile('test.js');

        // expect(writeFake.calledCount).to.equal(1);
        expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
    })

    it('throw an expection when a file alredy exists', () => {
        const writeFake = sinon.fake.throws(new Error);
        sinon.replace(fs, 'writeFileSync', writeFake);
        const fileManagement = proxyquire('../file.management', { fs });

        expect(() => fileManagement.createFile('test.txt').to.throw());

    })

    it('should return a list of files', () => {
        const readDirFake = sinon.fake.yields(null, ['test.txt']);
        sinon.replace(fs, 'readdir', readDirFake);
        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.getAllFiles((error, data) => {
            expect(data).to.eql(['test.txt']);
        });

    });
});