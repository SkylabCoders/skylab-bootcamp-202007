const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const fileManagement = require('../file.management');


describe('File Management SPY', () => {
    afterEach(() => {
        sinon.restore();    // restaura todo el sandbox, donde se ejecutan los tests
    })
    it.skip('should create a new file', () => {
        // configuracion del escenario
        const writeSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });


        // invocar las funciones
        fileManagement.createFile('test.txt');

        // afirmaciones / asserts
        expect(writeSpy.called).to.be.true;
        expect(writeSpy.calledWith('./data/test.txt')).to.be.true;
    });

    it.skip('should not create a file when there is no filename', () => {
        const writeSpy = sinon.spy(fs, 'writeFileSync');
        const fileManagement = proxyquire('../file.management', { fs });

        try {
            fileManagement.createFile();

        } catch (error) {
            expect(writeSpy.notcalled).to.be.true;
        }


    });
});