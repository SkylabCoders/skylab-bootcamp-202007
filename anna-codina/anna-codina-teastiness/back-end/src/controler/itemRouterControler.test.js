const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./itemRouterControler');

describe('itemRouterControler', () => {
  const name = 'bombasto';
  const newName = 'newBombasto';
  let res;
  let req;
  let error;
  beforeEach(() => {
    res = {
      json: () => {},
      status: () => {},
      send: () => {}
    };
  });
  beforeEach(() => {
    error = false;
    req = {
      item: {
        name,
        save: (callback) => {
          callback(error);
        },
        remove: (callback) => {
          callback(error);
        }
      }
    };
  });
  afterEach(() => {
    sinon.restore();
  });
  it('should get return 200 when status is called', () => {
    const statusSpy = sinon.spy(res, 'status');
    controler.get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should put return 200 when status is called', () => {
    req.body = { name: newName };
    const statusSpy = sinon.spy(res, 'status');
    controler.put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should put throw an error when save has en aerror', () => {
    error = true;
    req.body = { name: newName };
    const statusSpy = sinon.spy(res, 'status');
    controler.put(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
  it('should deleter return 200 when status is called', () => {
    const statusSpy = sinon.spy(res, 'status');
    controler.deleter(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should deleter throw an error when save has en aerror', () => {
    error = true;
    const statusSpy = sinon.spy(res, 'status');
    controler.deleter(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
});
