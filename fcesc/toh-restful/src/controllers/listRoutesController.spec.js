const should = require('should');
const sinon = require('sinon');
const referee = require("@sinonjs/referee");
const assert = referee.assert;
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
    });
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
    });
    it('Should return error when an error is thrown', ()=>{
      const Hero = function heroConstructor(){
        this.save = ()=>{ throw new Error('error'); }
      }
      const req = {
        body: {}
      };
      const res = {
        status: sinon.spy(),
        send: sinon.spy()
      };

      const controller = methods(Hero);
      let spy = sinon.spy(controller.create);
      try{
        controller.create(req,res);
      } catch(error) {
        spy
          .threw()
          .should.equal(true);
      }


    })
  });
  describe('GET', ()=>{
    it('Should receive a 200 response and hero object if correct id is provided', ()=>{
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
    it('XXXX', ()=>{
      const req = {
        body: {}
      };
      let res = {}
      let response = {
        send: { name: 'hola' }
      };

      const cbFind = sinon.stub();
      cbFind
          .withArgs(req, res)
          .onFirstCall()          
          .returns(response)
      cbFind.returns(response);

      assert.equals(cbFind(req, res), response);
    })
  });
});