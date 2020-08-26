const should = require('should');
const sinon = require('sinon');
const heroController = require('../controllers/heroRouteController');

describe('Hero Controller', () => {

  it('should GET a list of heroes', () => {

    const req = {
      hero: {}
    }

    const res = {

      json: sinon.spy(),

    }

    heroController.get()

    res.json.should.equal(true);

  });


})