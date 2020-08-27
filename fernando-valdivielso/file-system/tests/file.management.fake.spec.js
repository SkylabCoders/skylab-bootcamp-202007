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
});