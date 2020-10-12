const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('./shopRouteControler');

describe('itemRouterControler', () => {
  let res;
  let req;
  let error;
  let value;
  beforeEach(() => {
    value = 'bombasto';
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
  it('should deleter return 200 when status is called', () => {
    req = {
      item: {
        remove: (callback) => {
          callback();
        },
        ownerId: value,
        _id: 13
      }
    };
    const user = {
      owner: [value],
      save: () => {}
    };
    const secondModel = {
      findById: (query, callback) => {
        callback(error, user);
      }
    };
    const statusSpy = sinon.spy(res, 'status');
    controler(null, secondModel).deleter(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should deleter return 400 when status is called in findByID with an error', () => {
    error = true;
    req = {
      item: {
        remove: (callback) => {
          callback();
        },
        ownerId: value,
        _id: 13
      }
    };
    const user = {
      owner: [],
      save: () => {}
    };
    const secondModel = {
      findById: (query, callback) => {
        callback(error, user);
      }
    };
    const statusSpy = sinon.spy(res, 'status');
    controler(null, secondModel).deleter(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
  it('should in PUT return status 200 quen req.body nas no NewProductId property', async () => {
    req = {
      item: {
        save: (callback) => {
          callback();
        },
        populate: () => {
          const execPopulate = () => {};
          return { execPopulate };
        },
        name: value,
        products: [value]
      },
      body: {
        name: value,
        products: [value]
      }
    };

    const statusSpy = sinon.spy(res, 'status');
    await controler().put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in PUT return status 200 quen req.body has NewProductId property', async () => {
    req = {
      item: {
        save: (callback) => {
          callback();
        },
        populate: () => {
          const execPopulate = () => {};
          return { execPopulate };
        },
        name: value,
        products: [value]
      },
      body: {
        name: value,
        newProductId: [value]
      }
    };

    const statusSpy = sinon.spy(res, 'status');
    await controler().put(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });
  it('should in PUT return status 400 when has an error', () => {
    error = true;
    req = {
      item: {
        save: (callback) => {
          callback(error);
        },
        populate: () => {
          const execPopulate = () => {};
          return { execPopulate };
        },
        name: value,
        products: [value]
      },
      body: {
        name: value,
        products: [value]
      }
    };

    const statusSpy = sinon.spy(res, 'status');
    controler().put(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });
});
