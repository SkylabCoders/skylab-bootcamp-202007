const sinon = require('sinon');
const db = require('./modules');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('TEST SET modules', ()=>{

  describe('FIND TO ARRAY - test subset for module method', ()=>{

    it('Method findToArray should call find method with right query parameters', ()=>{
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
      
      const jsonStub = sinon.stub(res, 'json');
  
      const methods = itemMethods(collection);
      methods.readOne(req, res);
  
      expect(jsonStub).to.have.been.calledWith(req.data);
    })
  
  })

});