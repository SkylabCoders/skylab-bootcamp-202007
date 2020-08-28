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
    it('should return an error when creating a file without a filename',()=>{
      const writeMock = sinon.mock(fs);
      writeMock.expects('writeFileSync').never();

      const fileManagement = proxyquire('../file.management', { fs });

      try{
        fileManagement.createFile();
      } catch(error) {
        writeMock.verify();
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
    it('should create a new file - FAKE',()=>{
      const writeFake = sinon.fake();
      sinon.replace(fs, 'writeFileSync', writeFake);
      const fileManagement = proxyquire('../file.management', { fs });

      const filename = 'test.txt';
      const ROOT = './data';
      const wholeFileName = `${ROOT}/${filename}`;

      fileManagement.createFile(filename);

      expect(writeFake.calledWith(wholeFileName, '', { flag: 'wx'})).to.be.true; 
    })
    it('Throw an exception when a file already exists - FAKE', ()=>{
      const writeFake = sinon.fake.throws(new Error);
      sinon.replace(fs, 'writeFileSync', writeFake);
      const fileManagement = require('../file.management', { fs });

      const filename = 'test.txt';

      expect(()=>{fileManagement.createFile(filename).to.throw()});
    });
    it('should create a new test.file - MOCK', ()=>{
      const writeMock = sinon.mock(fs);
      const filename = 'test.txt';
      const ROOT = './data';
      const wholeFileName = `${ROOT}/${filename}`;
      writeMock.expects('writeFileSync')
        .once()
        .withArgs(wholeFileName,'', { flag: 'wx' })
        .returns(undefined);

      const fileManagement = proxyquire('../file.management', { fs });


      fileManagement.createFile(filename);

      writeMock.verify(); // aqui
    })
  })

  describe('GET FILE method', ()=> {
    it('Should throw an error if no filename is given', () => {
      try {
        getFile();
      } catch (thrownerror) {
        expect(thrownerror.message).to.be.string('Filename is required');
      }    
    })Q
    xit('Should call readFileSYnc with a given filename - STUB', () => {
      // configuración de escenario
      const readStub = sinon.stub(fs, 'readFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
      const fileManagement = proxyquire('../file.management', { fs });
      
      // invocar las funciones
      createFile('test.txt');
      const filename = 'test.txt';
      const ROOT = './data';
      const newFileName = `${ROOT}/${filename}`;

      readStub.returns(undefined);

      fileManagement.getFile(filename);// the stub has no side effects: no file is actually being created
      deleteFile('test.txt');
      // asserts LOOK HERE
      expect(readStub.calledWith(newFileName)).to.be.true;
    })
    xit('Should call readFileSYnc with a given filename - MOCK', () => {
      const readMock = sinon.mock(fs);
      const filename = 'test.txt';
      const ROOT = './data';
      const wholeFileName = `${ROOT}/${filename}`;
      
      createFile(filename);
      readMock.expects('readFileSync')
        .once()
        .withArgs(wholeFileName)
        .returns(undefined);

      const fileManagement = proxyquire('../file.management', { fs });


      fileManagement.getFile(filename);
      deleteFile(filename);

      readMock.verify();
    })
    it('Should call readFileSYnc with a given filename - SPY', () => {
        // configuración de escenario
        const readSpy = sinon.spy(fs, 'readFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
        const fileManagement = proxyquire('../file.management', { fs });
        
        // invocar las funciones
        const filename = 'test.txt';
        fileManagement.getFile(filename);// the spy has side effects: file is actually being created

        // asserts
        expect(readSpy.called).to.be.true;
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
    it('should save a file - MOCK', ()=>{
      const writeMock = sinon.mock(fs);
      const filename = 'test.txt';
      const ROOT = './data';
      const wholeFileName = `${ROOT}/${filename}`;
      writeMock.expects('writeFileSync')
        .once()
        .withArgs(wholeFileName,'')
        .returns(undefined);

      const fileManagement = proxyquire('../file.management', { fs });


      fileManagement.saveFile(filename,'');

      writeMock.verify(); // aqui
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
    it('should create a new file mockFileName2.txt when a file mockFileName1.txt exists and mockFileName is given as a file name - STUB', () => {
      // configuración de escenario
      const writeStub = sinon.stub(fs, 'writeFileSync'); // el espía no previene los efectos secundarios que puedan causar los métodos
      const readDirStub = sinon.stub(fs, 'readdirSync');
      const fileManagement = proxyquire('../file.management', { fs });
      
      // invocar las funciones
      const filename = 'test.txt';
      const anotherFile = 'test1.txt';
      const ROOT = './data';
      const newFileName = 'test2.txt';

      writeStub.withArgs(`${ROOT}/${filename}`).throws(new Error());
      readDirStub.returns([filename, anotherFile]);

      fileManagement.createFileSafe(filename);// the stub has no side effects: no file is actually being created

      // asserts
      expect(writeStub.calledWith(newFileName)).to.be.true;
      // expect(writeStub.callCount).to.equal(2);
    })
  })

  describe('GET ALL FILES method', ()=> {
    it('should return a list of files', () => {
      const readDirStub = sinon.stub(fs, 'readdir');
      const fileManagement = proxyquire('../file.management', { fs });

      const filesArray = ['test.txt'];
      const errorsArray = [];

      readDirStub.yields(errorsArray, filesArray); // [] es para el error, función generadora

      fileManagement.getAllFiles((error, data)=>{
        expect(error).to.equal(errorsArray);
        expect(data).to.equal(filesArray);
      })
    })
    it('Should return a list of files', ()=>{
      const filesArray = ['test.txt'];
      const readDirFake = sinon.fake.yields(null, filesArray);
      sinon.replace(fs, 'readdir', readDirFake);
      const fileManagement = proxyquire('../file.management', { fs });

      fileManagement.getAllFiles((error, data)=>{
        expect(data).to.eql(filesArray);
      });
    });
  })

  describe('GET ALL FILES PROMISE method', ()=> {
    it('should return a list of files', () => {
      const readDirStub = sinon.stub(fs, 'readdir');
      const util = {
        promisify: sinon.stub().returns(readDirStub)
      }
      const fileManagement = proxyquire('../file.management', { fs, util });

      const filesArray = ['one.txt', 'another.txt'];
      readDirStub.resolves(filesArray);
      
      return fileManagement
        .getAllFilesPromise()
        .then(
          (files) => { 
            expect(files).to.eql(filesArray);
          }
        )
    })
  })

  describe('CREATE FILE INJECTED method', ()=> {
    it('Should return undefined when a filename is given', () => {
      expect(createFileInjected('something.txt')).to.equal(undefined);
    })
  })
})