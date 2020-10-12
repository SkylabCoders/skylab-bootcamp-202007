const { expect } = require('chai');
const sinon = require('sinon');

const followersBand = require('./followersBand');

describe('Followers Band test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should respond with status 200', () => {
    const num = [1, 2, 3];

    const User = {
      find: (id, callback) => {
        callback(null, num);
        return num;
      }
    };
    const req = { params: { id: 13 } };
    const res = { send: () => {}, status: () => {} };

    const statusStub = sinon.stub(res, 'status');

    followersBand(User)(req, res);

    expect(statusStub.calledWith(200)).to.be.true;
  });

  it('should send error if find returnit', () => {
    const User = { find: (id, callback) => callback('err') };
    const req = { params: { id: 13 } };
    const res = { send: () => {}, status: () => {} };

    const sendStub = sinon.stub(res, 'send');

    followersBand(User)(req, res);

    expect(sendStub.called).to.be.true;
  });
});
