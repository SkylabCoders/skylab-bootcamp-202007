const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./midlewhereControler');

describe('midlewhereControler', () => {
  let res;
  let req = {
    item: undefined,
    params: {
      id: 13
    }
  };
  let error;
  let item;
  const Model = {
    findById: (id, callback) => {
      callback(error, item);
    }
  };
  const next = () => {};
  beforeEach(() => {
    error = false;
    res = {
      send: () => {},
      status: () => {}
    };
  });
  afterEach(() => {
    sinon.restore();
  });
  it('sholud ', () => {
    item = {};
    const nextSpy = sinon.spy(next);
    controler(Model).getById(req, res, nextSpy);
    expect(nextSpy.called).to.be.true;
  });
  it('sholud send error if findById throw and error', () => {
    error = true;
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).getById(req, res, next);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
  it('sholud send status 404 if item is undefined', () => {
    item = false;
    const statusSpy = sinon.spy(res, 'status');
    controler(Model).getById(req, res, next);
    expect(statusSpy.calledWith(404)).to.be.true;
  });
});
