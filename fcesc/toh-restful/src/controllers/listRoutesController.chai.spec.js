const sinon = require('sinon');
const methods = require('./listRoutesController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

describe('List Controller Tests - SPIES', ()=>{
  describe('CREATE', ()=>{
    it('Should attach a new hero to response if a name is given', ()=>{
      const Hero = function heroConstructor(object){
        this.save = (callback)=>{callback(false);}
        this.name = '';
        return object;
      }
      const req = {
        body: {
          name: 'Bombasto'
        }
      };
      const res = {
        status: ()=>{},
        send: ()=>{},
        json:(object)=>{}
      };
      
      const jsonSpy = sinon.spy(res, 'json');
      const argument = new Hero(req.body);

      methods(Hero).create(req,res);

      expect(jsonSpy).to.have.been.calledWith(argument);
    });

    it('Should return 201 status when an item is created.', ()=>{
      const Hero = function heroConstructor(){
        this.save = ()=>{}
      }
      const req = {
        body: {
          name: 'Bombasto'
        }
      };
      const res = {
        status: function foo(code){},
        send: ()=>{},
        json: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');

      methods(Hero).create(req,res);

      expect(statusSpy).to.have.been.calledWith(201);
    });
  
    it('Should return 400 if there is no name for the item', ()=>{
      const Hero = function heroConstructor(){
        this.save = ()=>{}
      }
      const req = {
        body: {}
      };
      const message = 'Item name is required';
      const res = {
        status: function foo(code){},
        send: function baz(message){}
      };
      
      const statusSpy = sinon.spy(res, 'status');
      const sendSpy = sinon.spy(res, 'send');

      methods(Hero).create(req,res);

      expect(statusSpy).to.have.been.calledWith(400);
    });

    it('Should append an error message to res if there is no name for the item', ()=>{
      const Hero = function heroConstructor(){
        this.save = (callback)=>{callback()}
      }
      const req = {
        body: {}
      };
      const message = 'Item name is required';
      const res = {
        status: ()=>{},
        send: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');
      const sendSpy = sinon.spy(res, 'send');

      methods(Hero).create(req,res);

      expect(sendSpy).to.have.been.calledWith(message);
    });

    it('Should return an error if save function returns an error', ()=>{
      const Hero = function heroConstructor(){
        this.save = (callback)=>{callback('some error')}
      }
      const item = new Hero();
      console.log(item.save());
      const req = {
        body: {
          name: 'pepe'
        }
      };
      const res = {
        status: ()=>{},
        send: (error)=>{error}
      };
      
      const sendSpy = sinon.spy(res, 'status');

      methods(Hero).create(req,res);

      expect(sendSpy).to.have.been.calledWith('some error');
    });
  });

  describe('GETLIST', ()=>{
    it('Should return status 200 if there query results are available', ()=>{
      const Hero = function heroConstructor(){
        this.find = ()=>{}
      }
      const req = {
        query: {
          id: 3        }
      };
      const res = {
        status: (code)=>{},
        send: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');

      methods(Hero).getList(req,res);

      expect(statusSpy).to.have.been.calledWith(201);

    });

    it('Should return status 200 if there query results are available', ()=>{
      const Hero = function heroConstructor(){
        this.find = ()=>{}
      }
      const req = {
        query: {
          name: 'Johny'
        }
      };
      const res = {
        status: (code)=>{},
        send: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');

      methods(Hero).getList(req,res);

      expect(statusSpy).to.have.been.calledWith(201);

    });
  
    it('Should call find with a query', ()=>{
      const Hero = function heroConstructor(){
        this.find = ()=>{}
      }
      const req = {
        query: {}
      };
      const res = {};
      
      const statusSpy = sinon.spy(res, 'status');

      methods(Hero).create(req,res);

      expect(statusSpy.calledWith(400)).to.be.true;
    });
  });

})