const should = require('should');
const sinon = require('sinon');
const methods = require('./listRoutesController');

describe('Hero Controller Tests', ()=>{
  describe('POST', ()=>{
    it('Should create a new item provided there is a name', ()=>{
      const Hero = function heroConstructor(){
        this.save = ()=>{}
      }

      const req = {
        body: {
          name: 'Bombasto'
        }
      };
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
        send: sinon.spy()
      };

      const controller = methods(Hero);
      controller.create(req,res);

      res.status
        .calledWith(201)
        .should.equal(true);

    })
    it('Should not create a new item without a name', ()=>{
      const Hero = function heroConstructor(){
        this.save = ()=>{}
      }

      const req = {
        body: {}
      };
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
        send: sinon.spy()
      };

      const controller = methods(Hero);
      controller.create(req,res);

      res.status
        .calledWith(400)
        .should.equal(true, 'Bad status, name is not required in this scenario');
      res.send
        .calledWith('Item name is required')
        .should.equal(true, 'Message is not correct');
    })
  })
});