const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./itemListRouterControler');

describe('itemListRouterControler', () => {
  let res;
  let req;
  beforeEach(() => {
    res = {
      json: () => {},
      status: () => {},
      send: () => {}
    };
    req = {};
  });
  afterEach(() => {
    sinon.restore();
  });
  it('should in GET find to be called', () => {
    const Model = {
      find: () => {
        const populate = () => {
          const exec = () => {};
          return { exec };
        };
        return { populate };
      }
    };
    const findSpy = sinon.spy(Model, 'find');
    controler(Model).get(req, res);
    expect(findSpy.called).to.be.true;
  });
  it('should in GET return status 400 when throw and error', () => {
    const error = 'error mesage';
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
  it('should in GET return status 200 with query type', () => {
    const teaType = 'green';

    req = {
      query: {
        type: teaType
      }
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
  it('should in GET return status 200 with query name', () => {
    const teaName = 'green';

    req = {
      query: {
        name: teaName
      }
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
  it('should in GET return status 200 with query name', () => {
    const teaBenefit = 'memory';

    req = {
      query: {
        benefits: teaBenefit
      }
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
    const body = 'tea';
    function Model() {
      const save = () => {};
      return { save };
    }
    req = { body };
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).post(req, res);
    expect(statusSpy.calledWith(201)).to.be.true;
  });
});
