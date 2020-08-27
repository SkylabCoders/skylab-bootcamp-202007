const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe.skip('File Management Spy', () => {
    afterEach(()=> {
        sinon.restore();
    });

    xit('should create a new file', () => {
        // configuración del escenario
        const writeSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        // invocar las funciones
        fileManagement.createFile('text.txt');
        
        // afirmaciones o asserts
        expect(writeSpy.called).to.be.true;

    });

    it('should nor create a file when there is no filename', () => {
        const writeSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        try {
            fileManagement.createFile();
        } catch (error) {}
        
        // afirmaciones o asserts
        expect(writeSpy.notCalled).to.be.true;

    });
})
