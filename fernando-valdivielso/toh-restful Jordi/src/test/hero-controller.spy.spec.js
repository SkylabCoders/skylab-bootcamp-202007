const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('Hero controller', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('should call json, GET', () => {

    const req = {
      hero: {}
    };

    const res = {
      json: () => { },
      send: () => { }
    };

    const jsonSpy = sinon.spy(res, 'json');
    const sendSpy = sinon.spy(res, 'send');

    controller.get(req, res);

    expect(jsonSpy.called).to.equal(true);
    expect(sendSpy.called).to.equal(false);

  });

  it('should not call json PUT', () => {

    const req = {
      body: {
        name: 'Bombasto',

      },
      hero: { save: () => { } }
    }

    const res = {
      json: () => { },
      send: () => { }
    }

    const jsonSpy = sinon.spy(res, 'json');
    const sendSpy = sinon.spy(res, 'send');
    const saveSpy = sinon.spy(req.hero, 'save');

    controller.put(req, res);

    expect(jsonSpy.called).to.equal(false);
    expect(sendSpy.called).to.equal(false);
    expect(saveSpy.called).to.equal(true);

  });

  it('should delete', () => {
    const req = {
      hero: {
        remove: () => { }
      }
    }

    const res = {
      sendStatus: () => { },
      send: () => { }
    }

    const sendStatusSpy = sinon.spy(res, 'sendStatus');
    const sendSpy = sinon.spy(res, 'send');

    controller.deleter(req, res);

    expect(sendStatusSpy.calledWith(204)).to.be.true;
    expect(sendSpy.called).to.equal(true);
  })

})