const sinon = require('sinon');
const itemMethods = require('./itemRoutesController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('ITEM ROUTES CONTROLLER test set', ()=>{

  describe('READ ONE - test subset for router callback', ()=>{

    it('Callback readOne should call res.json with one item', ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {
        data: {
          name: 'testPropertyValue',
          id: 3
        }
      }
      const res = {
        status: ()=>{},
        json: function foo(something){something}
      };
      
      const jsonSpy = sinon.spy(res, 'json');
  
      const methods = itemMethods(collection);
      methods.readOne(req, res);
  
      expect(jsonSpy).to.have.been.calledWith(req.data);
    })
  
    it('Callback readOne should return status 200 if there is an item', ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {
        data: {
          name: 'testPropertyValue',
          id: 3
        }
      }
      const res = {
        status: function foo(code){code},
        json: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');
  
      const methods = itemMethods(collection);
      methods.readOne(req, res);
  
      expect(statusSpy).to.have.been.calledWith(200);
    })

  });

});