const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./shopListControler');

describe('itemRouterControler', () => {
  let res;
  let req;
  const error = 'error mesage';
  beforeEach(() => {
    res = {
      json: () => {},
      status: () => {},
      send: () => {}
    };
  });
  afterEach(() => {
    sinon.restore();
  });
  it('should in GET return status 400 when throw and error', () => {
    const Model = {
      find: (query) => {
        const populate = () => {
          const exec = (callback) => {
            callback(error);
          };
          return { exec };
        };
        return { populate };
      }
    };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).get(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
  it('should in GET return status 200', () => {
    req = {
      query: { ownerId: 'bombasto' }
    };
    const Model = {
      find: (query) => {
        const populate = () => {
          const exec = (callback) => {
            callback();
          };
          return { exec };
        };
        return { populate };
      }
    };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in GET return status 200 with name query', () => {
    req = {
      query: { name: 'bombasto' }
    };
    const Model = {
      find: (query) => {
        const populate = () => {
          const exec = (callback) => {
            callback();
          };
          return { exec };
        };
        return { populate };
      }
    };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in GET return status 200 with city query', () => {
    req = {
      query: { city: 'bombasto' }
    };
    const Model = {
      find: (query) => {
        const populate = () => {
          const exec = (callback) => {
            callback();
          };
          return { exec };
        };
        return { populate };
      }
    };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in POST call return status 201', () => {
    const body = { owner: ['tea'], save: () => {} };
    function Model() {
      const save = () => {};
      return { save };
    }
    const secondModel = {
      findById: (query, callback) => {
        callback(null, body);
      }
    };
    req = { body };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model, secondModel).post(req, res);
    expect(statusSpy.calledWith(201)).to.be.true;
  });
  it('should in POST call return status 400 when throw and error', () => {
    const body = { owner: ['tea'] };
    function Model() {
      const save = () => {};
      return { save };
    }
    const secondModel = {
      findById: (query, callback) => {
        callback(error);
      },
      save: () => {}
    };
    req = { body };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model, secondModel).post(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
});
