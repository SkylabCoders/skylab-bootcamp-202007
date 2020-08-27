const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');
const fs = require('fs');

describe('File Management Fake', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should create a new file', () => {
        // para conectar el fake con el sistema que estamos probando utilizamos 
        const writeFake = sinon.fake();

        // reemplamos la función orginial con la función falsa
        sinon.replace(fs, 'writeFileSync', writeFake);
        const fileManagement = proxyquire('../file.management', { fs });
    
        fileManagement.createFile('test.txt');
    
        expect(writeFake.calledWith('./data/test.txt', '')).to.be.true;
    })

    it('throw an exception when a file already exist', () => {
        // para conectar el fake con el sistema que estamos probando utilizamos 
        // lanzando la porpiedad fake no la invocación
        const writeFake = sinon.fake.throws(new Error());
        sinon.replace(fs, 'writeFileSync', writeFake);
        const fileManagement = proxyquire('../file.management', { fs });
    
        expect(() => fileManagement.createFile('test.txt')).to.throw();
    });

    it('should return a list of files', () => {
        // para conectar el fake con el sistema que estamos probando utilizamos 
        // lanzando la porpiedad fake no la invocación
        const readDirFake = sinon.fake.throws(null, ['test.txt']);
        sinon.replace(fs, 'readdir', readDirFake);
        const fileManagement = proxyquire('../file.management', { fs });
    
       fileManagement.getAllFiles((error, data) => {
           expect(data).to.eql(['test.txt']);
       });
    });
});