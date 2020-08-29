const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('should work', () => {
    expect(true).to.be.true;
  });

  it('should call status only once', () => {

    const Hero = function () {
      this.save = () => { };
    };

    const req = {
      body: {}
    };
    const res = {
      status: () => { },
      json: () => { },
      send: () => { }
    };
    const statusStub = sinon.stub(res, 'status');

    controller(Hero).post(req, res);

    expect(statusStub.callCount).to.equal(2);
    expect(statusStub.callCount).to.equal(2);
  });

  it('should response with status 400', () => {

  });

  it('should call find without query', () => {

  })

  it('should call find with a query', () => {


  });

});




