const { expect } = require("chai")
//const fileManagement = require('../file.management');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require("../file.management");

describe('File Management fake', () => {

    afterEach(() => {
        sinon.restore();
    })

    it.skip('Should create a new file', () => {

        const writeFake = sinon.fake();
        // con el fake lo que hacemos es reemplazar ese método con el stub
        sinon.replace(fs,'writeFileSync',writeFake);
        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.createFile('test.txt');

        //expect(writeFake.callCount).to.equal(1);
        expect(writeFake.calledWith('./data/test.txt','')).to.be.true;
    })

    it('Throw an exception when a file already exists', () => {
        // en la declaración con respecto al stub el fake debes definirle el comportamiento nada más instanciarlo. 
        // Porque luego ya no se puede cambiar
        const writeFake = sinon.fake.throws(new Error());
        // con el fake lo que hacemos es reemplazar ese método con el que queremos
        sinon.replace(fs,'writeFileSync',writeFake);
        // cargamos las dependencias
        const fileManagement = proxyquire('../file.management', { fs });

        //expect(writeFake.callCount).to.equal(1);
        expect(()=> fileManagement.createFile('test.txt')).to.throw();
    })

    it('should return a list of files', () => {
        // en la declaración con respecto al stub el fake debes definirle el comportamiento nada más instanciarlo. 
        // Porque luego ya no se puede cambiar
        const readDirFake = sinon.fake.yields(null, ['test.txt']);
        // con el fake lo que hacemos es reemplazar ese método con el que queremos
        sinon.replace(fs,'readdir',readDirFake);
        // cargamos las dependencias
        const fileManagement = proxyquire('../file.management', { fs });

        fileManagement.getAllFiles((error,data)=>{
            expect(data).to.eql(['test.txt']);
        });
    })

   

})