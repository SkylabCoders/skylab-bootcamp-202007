const sinon = require('sinon');
const proxyquire = require('proxyquire');
const fs = require('fs');
const { expect } = require('chai');

describe('File Management Fake', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should create a new file', () => {
        const writeMock = sinon.mock(fs);
        writeMock.expects('writeFileSync').once();

        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.createFile('test.js');

        writeMock.verify();

    });

    it('should create a new file when there is a file with the same name', () => {
        const writeMock = sinon.mock(fs);
        writeMock.expects('writeFileSync').args('./data/test.txt').throws();
        writeMock
            .expects('writeFileSync')
            .args('./data/test.txt')
            .returns(undefined);
        writeMock.expects('readdirSync').returns(['test.txt']);

        const fileManagement = proxyquire('../file.management', { fs });
        fileManagement.createFile('test.js');

        writeMock.verify();

    })
});


