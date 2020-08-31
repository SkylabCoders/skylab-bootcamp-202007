/* const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');


describe('Hero Controller', () => {

  it('should response 400 when name is missing', () => {
    const Hero = function heroConstructor() {
      this.save = () => { }
    }

    const req = {
      body: {}
    };
    const res = {
      status: sinon.spy(),
      json: sinon.spy(),
      send: sinon.spy()
    };

    const controller = heroesController(Hero);
    controller.post(req, res);

    res.status.calledWith(400).should.equal(true, 'Bad status');
    res.send.calledWith('Name is required!').should.equal(true, 'Message is not correct');
  });

  it('should GET a list of heroes', () => {

    const req = {
      query: {}
    }

    const res = {
      status: sinon.spy(),
      json: sinon.spy(),
      send: sinon.spy()
    }

    const Hero = {
      find: (query, callback) => callback()
    };
    const controller = heroesController(Hero);
    controller.get(req, res);

    res.send.calledWith(201).should.equal(true);
    res.json.calledWith(heroes[0].name).should.equal('Bombasto');

  });
}); */