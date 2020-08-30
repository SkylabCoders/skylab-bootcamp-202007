const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai');
const fs = require('fs');


describe('File management Stub', () => {
  afterEach(() => {
    sinon.restore();
  });

  it.skip('should create a file', () => {
    const writeStub = sinon.stub(fs, 'writeFileSync');
    const fileManagement = proxyquire('../file.management', { fs });

    fileManagement.createFile('test.txt');

    expect(writeStub.callCount).to.equal(1);
  });

  it.skip('should create a file', () => {
    const writeStub = sinon.stub(fs, 'writeFileSync');
    writeStub.throws(new Error('Filename is required!'))
    const fileManagement = proxyquire('../file.management', { fs });

    expect(() => fileManagement.createFile()).to.throw();
  });

  it.skip('should create file named test1.txt when text.txt already exist', () => {
    const writeStub = sinon.stub(fs, 'writeFileSync');
    const fileManagement = proxyquire('../file.management', { fs });

    writeStub.withArgs('./data/test.txt').throws(new Error());

    fileManagement.createFileSafe('test.txt');

    expect(writeStub.calledWith('./data/test1.txt')).to.be.true;
    expect(writeStub.callCount).to.equal(2);

  });

  it.skip('should getAllFiles and return a list of files', () => {
    const readDirStub = sinon.stub(fs, 'readdir');
    const fileManagement = proxyquire('../file.management', { fs });

    readDirStub.yields(null, ['test.txt']);

    fileManagement.getAllFiles((error, data) => {
      expect(data).to.eql(['test.txt']);
    });
  })

  it.skip('should return a list of files from getAllFilesPromise', () => {
    const readDirStub = sinon.stub(fs, 'readdir');

    const util = {
      promisify: sinon.stub().returns(readdirStub)
    };

    const fileManagement = proxyquire('../file.management', { fs, util });
    readDirStub.resolves(['test.txt'])

    return fileManagement.getAllFilesPromise().then((files) => expect(files).to.eql(['test.txt']));
  });

})