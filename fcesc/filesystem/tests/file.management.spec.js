const { expect } = require("chai");
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');
const { createFile, 
  createFileInjected, 
  createFileSafe, 
  deleteFile, 
  getFile,
  getAllFiles, 
  getAllFilesPromise, 
  saveFile } = require('../file.management');

describe('File Management', () => {
    afterEach(()=>{
      sinon.restore();
    })
    describe('CREATE FILE method', ()=> {
      it('should create a new file - SPY', () => {
      // configuración de escenario
      const writeSpy = sinon.spy(fs, 'writeFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
      const fileManagement = proxyquire('../file.management', { fs });
      
      // invocar las funciones
      const filename = 'mockFileName';
      fileManagement.createFile(filename);// the spy has side effects: file is actually being created

      // asserts
      expect(writeSpy.called).to.be.true;

      deleteFile(filename);
    })
    it('should create a new file when a filename is given - STUB', () => {
      // configuración de escenario
      const writeStub = sinon.stub(fs, 'writeFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
      const fileManagement = proxyquire('../file.management', { fs });
      
      // invocar las funciones
      const filename = 'mockFileName.txt';
      fileManagement.createFile(filename);// the stub has no side effects: no file is actually being created

      // asserts
      expect(writeStub.called).to.be.true;
    })
    it('Should throw an error if no filename is given', () => {
      try {
        createFile();
      } catch (thrownerror) {
        expect(thrownerror.message).to.be.string('Filename is required');
      }    
    })
    it('Should throw an error if no filename is given - STUB', () => {
      // configuración de escenario
      const writeStub = sinon.stub(fs, 'writeFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
      writeStub.throws(new Error('Filename is required'));
      const fileManagement = proxyquire('../file.management', { fs });

      // asserts
      expect(() => fileManagement.createFile()).to.throw();
    })
  })

  describe('GET FILE method', ()=> {
    it('Should throw an error if no filename is given', () => {
      try {
        getFile();
      } catch (thrownerror) {
        expect(thrownerror.message).to.be.string('Filename is required');
      }    
    })
  })

  describe('SAVE FILE method', ()=> {
    it('Should throw an error if no filename is given', () => {
      try {
        saveFile();
      } catch (thrownerror) {
        expect(thrownerror.message).to.be.string('Filename is required');
      }    
    })
  })

  describe('DELETE FILE method', ()=> {
    it('Should throw an error if no filename is given', () => {
      try {
        deleteFile();
      } catch (thrownerror) {
        expect(thrownerror.message).to.be.string('Filename is required');
      }    
    })
  })

  describe('CREATE FILE SAFE method', ()=> {
    it('Should throw an error if no filename is given', () => {
      try {
        createFileSafe();
      } catch (thrownerror) {
        expect(thrownerror.message).to.be.string('Filename is required');
      }    
    })
    it('should create a new file mockFileName1.txt when a file mockFileName.txt exists and mockFileName is given as a file name - STUB', () => {
      // configuración de escenario
      const writeStub = sinon.stub(fs, 'writeFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
      const readDirStub = sinon.stub(fs, 'readdirSync');
      const fileManagement = proxyquire('../file.management', { fs });
      
      // invocar las funciones
      const filename = 'mockFileName.txt';
      const ROOT = './data';
      const newFile = filename.split('.').join('1.');
      const newFileName = `${ROOT}/${newFile}`;

      writeStub.withArgs(`${ROOT}/${filename}`).throws(new Error());
      writeStub.returns(undefined);
      readDirStub.returns([filename, newFile]);

      fileManagement.createFileSafe(filename);// the stub has no side effects: no file is actually being created

      // asserts
      expect(writeStub.calledWith(newFileName)).to.be.true;
      expect(writeStub.callCount).to.equal(2);
    })
  })
})