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

    it('should throw an error when creating a file without name', () => {
        const writeMock = sinon.mock(fs);
        writeMock.expects('writeFileSync').never();
        const fileManagement = proxyquire('../file.management', { fs });

        try {
            fileManagement.createFile();
        } catch (error) {
            writeMock.verify();
        }
    })

});


