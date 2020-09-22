const { expect } = require("chai");
const sinon = require('sinon');
const fs = require('fs');
const proxyquire = require('proxyquire');

describe('File Management Spy', () => {
  afterEach(() => {
    sinon.restore();
  })

  it.skip('should create a new file', () => {

    const filename = 'test.txt';
    const writeSpy = sinon.spy(fs, 'writeFileSync')
    const fileManagement = proxyquire('../file.management', { fs });

    fileManagement.createFile(filename);

    expect(writeSpy.called).to.be.true;
    expect(writeSpy.calledWith('./data/test.txt')).to.be.true;
  });

  it.skip('should not create a file when there is no filename', () => {

    const filename = '';
    const writeSpy = sinon.spy(fs, 'writeFileSync')
    const fileManagement = proxyquire('../file.management', { fs });

    try {
      fileManagement.createFile(filename);

    } catch (error) {

      expect(writeSpy.notCalled).to.be.true;
    }

  });
})