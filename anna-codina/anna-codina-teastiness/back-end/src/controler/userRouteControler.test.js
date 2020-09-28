const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./userRouteControler');

describe('userRouteControler', () => {
  let res;
  const req = {};
  let error;
  let value = {};
  beforeEach(() => {
    req.query = {};
    (value) => 'bombasto';
    error = false;
    res = {
      json: () => {},
      status: () => {},
      send: () => {}
    };
  });
  afterEach(() => {
    sinon.restore();
  });

  it('should send status 200 if every things goes ok ', async () => {
    const statusSpy = sinon.spy(res, 'status');
    req.item = {
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      execPopulate: sinon.stub().returnsThis(),
      save: sinon.stub().returnsThis()
    };
    await controler.put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should send status 200 if every things goes ok  with teaId', async () => {
    req.query.teaId = '13';
    const statusSpy = sinon.spy(res, 'status');
    req.item = {
      favouritesTeas: [],
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      execPopulate: sinon.stub().returnsThis(),
      save: sinon.stub().returnsThis()
    };
    await controler.put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should send status 200 if every things goes ok  with shopId', async () => {
    req.query.shopId = '13';
    const statusSpy = sinon.spy(res, 'status');
    req.item = {
      favouritesShops: [],
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      execPopulate: sinon.stub().returnsThis(),
      save: sinon.stub().returnsThis()
    };
    await controler.put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should status will be called with 400 if save throws and error', async () => {
    error = true;
    const statusSpy = sinon.spy(res, 'status');
    req.item = {
      findOne: sinon.stub().returnsThis(),
      populate: sinon.stub().returnsThis(),
      execPopulate: sinon.stub().returnsThis(),
      save: sinon.stub().callsFake(function fakeFn(callback) {
        callback(error, value);
      })
    };
    await controler.put(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
});
