const { expect } = require("chai")
//const fileManagement = require('../file.management');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management Spy', () => {

    afterEach(() => {
        sinon.restore();
    })

    it('Should create a new file', () => {
        // el spy antes del proxy para que coja bien las dependencias
        const writeFileSyncSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        const fileName = "Prueba.txt";

        fileManagement.createFile(fileName);

        expect(writeFileSyncSpy.called).to.be.true;
    })
    it('Should not create a new file where there is no filename', () => {
        // el spy antes del proxy para que coja bien las dependencias
        const writeFileSyncSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        try{
            fileManagement.createFile();
        } catch (error){
            expect(writeFileSyncSpy.called).to.be.false;
        }
        
    })

})