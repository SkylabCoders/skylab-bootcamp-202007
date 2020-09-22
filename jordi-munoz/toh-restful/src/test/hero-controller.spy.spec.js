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


  });

  it('should not call json and send error, GET', () => {

    const req = {

    };

    const res = {
      json: () => { },
      send: (error) => { error }
    };


    const sendSpy = sinon.spy(res, 'send');

    controller.get(req, res);

    expect(sendSpy.called).to.be.true;


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

    const saveSpy = sinon.spy(req.hero, 'save');

    controller.put(req, res);

    expect(jsonSpy.called).to.equal(false);

    expect(saveSpy.called).to.equal(true);

  });


  it('should print list without error PUT', () => {

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

    const saveFake = sinon.fake.yields(null);
    sinon.replace(req.hero, 'save', saveFake);

    const jsonSpy = sinon.spy(res, 'json');

    controller.put(req, res);

    expect(jsonSpy.called).to.be.true;


  });

  it('should send error if no save PUT', () => {

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

    const saveFake = sinon.fake.yields('error');
    sinon.replace(req.hero, 'save', saveFake);

    const sendSpy = sinon.spy(res, 'send');

    controller.put(req, res);

    expect(sendSpy.called).to.be.true;


  });

  it('should send an error', () => {
    const req = {
      hero: {
        remove: (error) => { error }
      }
    }

    const res = {
      sendStatus: () => { },
      send: () => { }
    }

    const removeFake = sinon.fake.yields('error');
    sinon.replace(req.hero, 'remove', removeFake);

    const sendSpy = sinon.spy(res, 'send');

    controller.deleter(req, res);

    expect(sendSpy.called).to.be.true;
    expect(sendSpy.calledWith('error')).to.be.true;
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

    const removeFake = sinon.fake.yields(null);
    sinon.replace(req.hero, 'remove', removeFake);

    const sendSpy = sinon.spy(res, 'sendStatus');

    controller.deleter(req, res);

    expect(sendSpy.called).to.be.true;
    expect(sendSpy.calledWith(204)).to.be.true;
  });

  it('should PATCH', () => {
    const req = {
      hero: {
        save: () => { }
      },
      body: {
        _id: {},
        name: 'jordi'
      }
    }

    const res = {
      json: () => { },
      send: () => { }
    }

    const saveFake = sinon.fake.yields('error');
    sinon.replace(req.hero, 'save', saveFake);

    const sendSpy = sinon.spy(res, 'send');

    controller.patch(req, res);

    expect(sendSpy.calledWith('error')).to.be.true;

  });

  it('should PATCH', () => {
    const req = {
      hero: {
        save: () => { }
      },
      body: {
        name: 'jordi'
      }
    }

    const res = {
      json: () => { },
      send: () => { }
    }

    const saveFake = sinon.fake.yields('error');
    sinon.replace(req.hero, 'save', saveFake);

    const sendSpy = sinon.spy(res, 'send');

    controller.patch(req, res);

    expect(sendSpy.calledWith('error')).to.be.true;

  });

  it('should PATCH', () => {
    const req = {
      hero: {
        save: () => { }
      },
      body: {
        name: 'jordi'
      }
    }

    const res = {
      json: () => { },
      send: () => { }
    }

    const saveFake = sinon.fake.yields();
    sinon.replace(req.hero, 'save', saveFake);

    const sendSpy = sinon.spy(res, 'json');

    controller.patch(req, res);

    expect(sendSpy.called).to.be.true;

  });

})