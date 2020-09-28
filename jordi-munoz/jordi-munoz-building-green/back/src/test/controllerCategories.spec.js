const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/categoriesRouteController');

describe('testing controllers', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should work', () => {
    expect(true).to.be.true;
  });

  it('should be called GET', () => {

    const Category = {
      find: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = {
      query: () => { }
    }

    const spyFind = sinon.spy(Category, 'find');

    controller(Category).get(req, res);

    expect(spyFind.called).to.be.true;
  });

  it('should GET json', () => {

    const Category = {
      find: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = {
      category: {}
    };

    const spyJson = sinon.spy(res, 'json');

    controller(Category).get(req, res);

    expect(spyJson.called).to.equal(false);

  });

  it('should send an error', () => {
    const Category = {
      find: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = { category: {} };

    const getFake = sinon.fake.yields('error', 'cat');
    sinon.replace(Category, 'find', getFake);

    const spySend = sinon.spy(res, 'send');

    controller(Category).get(req, res);

    expect(spySend.called).to.equal(true);
    expect(spySend.calledWith('error')).to.be.true;
  });

  it('should not send an error', () => {
    const Category = {
      find: () => { }
    };

    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    }

    const req = { category: {} };

    const getFake = sinon.fake.yields(null, 'cat');
    sinon.replace(Category, 'find', getFake);

    const spySend = sinon.spy(res, 'send');

    controller(Category).get(req, res);

    expect(spySend.called).to.equal(false);
    expect(spySend.called).to.be.false;
  });
})