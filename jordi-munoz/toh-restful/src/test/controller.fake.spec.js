/* const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('should work', () => {
    expect(true).to.be.true;
  });


  it('should call find with a query', () => {

    const Hero = {
      find: () => { }
    };

    const req = {
      query: {
        id: 'myId'
      }
    };

    const res = {};

    const findFake = sinon.fake(Hero, 'find');

    controller(Hero).get(req, res);

    expect(findFake.called).to.be.true;

  });

});
 */



