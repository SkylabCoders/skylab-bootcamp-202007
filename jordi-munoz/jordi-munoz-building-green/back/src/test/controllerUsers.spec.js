const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/usersRouteController');

describe('testing user controllers', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should work', () => {
    expect(true).to.be.true;
  });

  it('should send an error', () => {
    const User = {
      findOne: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { },
      save: () => { }
    }

    const req = { user: {} };

    const getFake = sinon.fake.yields('error', 'user');
    sinon.replace(User, 'findOne', getFake);

    const spySave = sinon.spy(res, 'save');

    controller(User).put(req, res);

    expect(spySave.called).to.equal(false);
    expect(spySave.calledWith('error')).to.be.false;
  });

  it('should not send an error', () => {
    const User = {
      findOne: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = {
      user: {
        sub: {},
        save: () => { }
      },
      body: {}
    };
    const user = {
      save: () => { }
    }

    const getFake = sinon.fake.yields('err', 'user');
    sinon.replace(User, 'findOne', getFake);

    const spySend = sinon.spy(res, 'send');

    controller(User).put(req, res);

    expect(spySend.called).to.equal(true);
    expect(spySend.called).to.be.true;
  });

  it('should not send an error', () => {
    const User = {
      findOne: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = {
      user: {
        sub: {},
        save: () => { }
      },
      body: {}
    };
    const user = {
      save: () => { }
    }

    const getFake = sinon.fake.yields('', null);
    sinon.replace(User, 'findOne', getFake);

    const spySend = sinon.spy(res, 'send');

    controller(User).put(req, res);

    expect(spySend.called).to.equal(true);
    expect(spySend.called).to.be.true;
  });

  it('should not send an error and user null', () => {
    const User = {
      findOne: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = {
      user: {
        sub: {},
        save: () => { }
      },
      body: {
        projects: {}
      }
    };

    const mockSave = {
      save: (err, user) => { }
    }

    const saveFake = sinon.fake.yields(null, 'user')
    sinon.replace(mockSave, 'save', saveFake);

    const getFake = sinon.fake.yields('', mockSave);
    sinon.replace(User, 'findOne', getFake);

    const spySend = sinon.spy(res, 'send');

    controller(User).put(req, res);

    expect(spySend.called).to.be.false;
  });

  it('should send an error POST', () => {
    const User = {
      findOne: () => { },
      create: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { },

    }

    const req = {
      user: { sub: 'ee' },
      body: {
        user: {
          sub: 'sub',
          nickname: 'nik',
          email: 'ksks'
        }
      }
    };

    const getFake = sinon.fake.yields('', null);
    sinon.replace(User, 'findOne', getFake);

    const createFake = sinon.fake.yields('error', null);
    sinon.replace(User, 'create', createFake);

    const spySend = sinon.spy(res, 'send');

    controller(User).post(req, res);


    expect(spySend.calledWith(404)).to.be.true;
  });

  it('should not send an error POST', () => {
    const User = {
      findOne: () => { },
      create: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { },

    }

    const req = {
      user: { sub: 'ee' },
      body: {
        user: {
          sub: 'sub',
          nickname: 'nik',
          email: 'ksks'
        }
      }
    };

    const getFake = sinon.fake.yields('error', 'user');
    sinon.replace(User, 'findOne', getFake);

    const createFake = sinon.fake.yields('', 'user');
    sinon.replace(User, 'create', createFake);

    const spySend = sinon.spy(res, 'send');

    controller(User).post(req, res);


    expect(spySend.calledWith('error')).to.be.false;
  });

})