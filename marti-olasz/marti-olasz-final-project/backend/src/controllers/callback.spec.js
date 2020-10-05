const { expect } = require('chai');
const sinon = require('sinon');

const callback = require('./callback');

describe('Callback test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should respond with status 200', () => {
    const res = {
      status: () => {},
      json: () => {}
    };

    const statusStub = sinon.stub(res, 'status');

    callback(res)();

    expect(statusStub.calledWith(200)).to.be.true;
  });

  it('should respond with status 400', () => {
    const res = {
      status: () => {},
      send: () => {}
    };
    const err = 'error';

    const statusStub = sinon.stub(res, 'status');

    callback(res)(err);

    expect(statusStub.calledWith(400)).to.be.true;
  });
});
