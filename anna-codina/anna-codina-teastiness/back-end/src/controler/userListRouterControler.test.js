const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./userListRouterControler');
const Model = require('../models/user-model');

describe('UserListRouterControler', () => {
  let res;
  let req = {};
  let error;
  let value;
  beforeEach(() => {
    req.query = {};
    res = {
      json: () => {},
      status: () => {},
      send: () => {}
    };
    error = false;
    value = {};
  });
  afterEach(() => {
    sinon.restore();
  });
  it('should in Get return 200 when findOne get a value', () => {
    const statusSpy = sinon.spy(res, 'status');
    const ModelStub = {
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      exec: sinon.stub().callsFake(function fakeFn(callback) {
        callback(error, value);
      })
    };

    controler(ModelStub).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in Get return 200 when findOne get a value when have query.email', () => {
    const statusSpy = sinon.spy(res, 'status');

    req.query.email = 'test';
    const ModelStub = {
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      exec: sinon.stub().callsFake(function fakeFn(callback) {
        callback(error, value);
      })
    };

    controler(ModelStub).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in Get return 200 when findOne get a value when have query.sub', () => {
    const statusSpy = sinon.spy(res, 'status');
    req.query.sub = 'test';
    const ModelStub = {
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      exec: sinon.stub().callsFake(function fakeFn(callback) {
        callback(error, value);
      })
    };

    controler(ModelStub).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in Get return 400 when exec have an error', () => {
    error = true;
    const statusSpy = sinon.spy(res, 'status');
    const ModelStub = {
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      exec: sinon.stub().callsFake(function fakeFn(callback) {
        callback(error);
      })
    };

    controler(ModelStub).get(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
  it('should in Get return 201 when findOne get a value', () => {
    const statusSpy = sinon.spy(res, 'status');
    class Model {
      constructor() {}
      static findOne() {
        return this;
      }
      static populate() {
        return this;
      }
      static exec(callback) {
        callback(error);
      }
      save() {}
    }

    controler(Model).get(req, res);
    expect(statusSpy.calledWith(201)).to.be.true;
  });
});
