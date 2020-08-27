const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');
const fs = require('fs');

describe('File Management Mock', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should create a new file', () => {
        // para conectar el fake con el sistema que estamos probando utilizamos 
        const writeMock = sinon.mock(fs);
        writeMock.expects('writeFileSync').once();
    
        const fileManagement = proxyquire('../file.management', { fs });
    
        fileManagement.createFile('test.txt');
    
        writeMock.verify();   
    });


    it('should create a new file when there is a file with the same name', () => {
        const writeMock = sinon.mock(fs);
        writeMock.expects('writeFileSync').withArgs('./data/test.txt').throws();

        writeMock
        .expects('writeFileSync')
        .args('/data/test1.txt')
        .returns(undefined);

        writeMock.expects('readdirSync').returns(['test.txt']).once();
    
        const fileManagement = proxyquire('../file.management', { fs });
    
        fileManagement.createFileSafe('test.txt');
    
        writeMock.verify();   
    });

    it('should throw an error when creating a file without filename', () => {
        const writeMock = sinon.mock(fs);
        writeMock.expects('writeFileSync').never();

        const fileManagement = proxyquire('../file.management', { fs });

        try {
            fileManagement.createFile('fdahdkjahd');
        } catch (error) {
            writeMock.verify();
        }
    });
    
})