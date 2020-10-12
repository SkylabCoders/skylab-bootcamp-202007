const { expect } = require('chai');
const sinon = require('sinon');

const newBand = require('./newBand');

describe('New Band test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should findById is called', () => {
    const req = { params: { id: 1 } };
    const res = {};
    const Band = {
      create: (data, callback) => callback(null, 'result')
    };
    const User = {
      findByIdAndUpdate: (id, data, callback) => callback(null, 'result'),
      findById: () => {
        return {
          populate: () => {
            return {
              populate: () => {
                return {
                  exec: () => {}
                };
              }
            };
          }
        };
      }
    };

    const findByIdSpy = sinon.spy(User, 'findById');

    newBand(User, Band)(req, res);

    expect(findByIdSpy.called).to.be.true;
  });

  it('should send error if create return error', () => {
    const req = { params: { id: 1 } };
    const res = { send: () => {} };
    const Band = {
      create: (data, callback) => callback('error', 'result')
    };
    const User = {};

    const sendStub = sinon.stub(res, 'send');

    newBand(User, Band)(req, res);

    expect(sendStub.called).to.be.true;
  });

  it('should send error if create return error', () => {
    const req = { params: { id: 1 } };
    const res = { send: () => {} };
    const Band = {
      create: (data, callback) => callback(null, 'result')
    };
    const User = {
      findByIdAndUpdate: (id, data, callback) => callback('error', 'result')
    };

    const sendStub = sinon.stub(res, 'send');

    newBand(User, Band)(req, res);

    expect(sendStub.called).to.be.true;
  });
});
