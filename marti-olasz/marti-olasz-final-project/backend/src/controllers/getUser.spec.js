const { expect } = require('chai');
const sinon = require('sinon');

const getUser = require('./getUser');

describe('GetUser test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should respond with status 200', () => {
    const req = {
      params: { id: 13 },
      body: { nickname: 'Bombasto' }
    };
    const res = {
      status: () => {},
      json: () => {}
    };
    const User = {
      findOne: () => {
        return {
          populate: () => {
            return {
              populate: () => {
                return {
                  exec: (callback) => {
                    callback(null, '');
                  }
                };
              }
            };
          }
        };
      },
      create: () => {}
    };

    const statusStub = sinon.stub(res, 'status');

    getUser(User)(req, res);

    expect(statusStub.calledWith(200)).to.be.true;
  });

  it('should create new user', () => {
    const req = {
      params: { id: 13 },
      body: { nickname: 'Bombasto' }
    };
    const res = {
      status: () => {},
      json: () => {}
    };
    const User = {
      findOne: () => {
        return {
          populate: () => {
            return {
              populate: () => {
                return {
                  exec: (callback) => {
                    callback(null, null);
                  }
                };
              }
            };
          }
        };
      },
      create: () => {}
    };

    const createStub = sinon.stub(User, 'create');

    getUser(User)(req, res);

    expect(createStub.called).to.be.true;
  });

  it('should respond error', () => {
    const req = {
      params: { id: 13 }
    };
    const res = {
      status: () => {}
    };
    const User = {
      findOne: () => {
        return {
          populate: () => {
            return {
              populate: () => {
                return {
                  exec: (callback) => {
                    callback('err', null);
                  }
                };
              }
            };
          }
        };
      }
    };

    const statusStub = sinon.stub(res, 'status');

    getUser(User)(req, res);

    expect(statusStub.calledWith(404)).to.be.true;
  });
});
