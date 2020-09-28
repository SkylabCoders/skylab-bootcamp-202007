const sinon = require('sinon');
const listByUserMethods = require('./listByUserController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('LIST BY USER CONTROLLER test set', ()=>{

  describe('GET LIST BY USER function', ()=>{

    afterEach(()=>{
      sinon.restore();
    });

    it('Callback getListByUser should return 200 status if a valid user id is provided', async ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {
        params: {
          userId: '5f4faca78b141a231040efad'
        }
      }
      const res = {
        status: (code)=>{code},
        json: (something)=>{something},
        send: (something)=>{something},
        db: (collection)=>{
          return {
            collection,
            findToArray: (query)=>{query}
          }
        }
      };

      const stub = sinon.stub(res, 'status');

      const methods = listByUserMethods(collection);
      await methods.getListByUser(req, res);

      expect(stub).to.have.been.calledWith(200);
    })

    it('Throw an exception when db call method fails', async ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {};
      const res = {
        status: (code)=>{code},
        json: (something)=>{something},
        send: (something)=>{something},
      };
  
      const stub = sinon.stub(res, 'status');
  
      const methods = listByUserMethods(collection);
      await methods.getListByUser(req, res);
    
      expect(stub).to.have.been.calledWith(404);
    });

  });

  describe('GET FLOW BY USER function', ()=>{

    afterEach(()=>{
      sinon.restore();
    });

    it('Callback getFlowByUser should return 200 status if a valid user id is provided', async ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {
        params: {
          userId: '5f4faca78b141a231040efad'
        }
      }
      const res = {
        status: (code)=>{code},
        json: (something)=>{something},
        send: (something)=>{something},
        db: (collection)=>{
          return {
            collection,
            findProjectionToArray: (query)=>{[query]}
          }
        }
      };

      const stub = sinon.stub(res, 'status');

      const methods = listByUserMethods(collection);
      await methods.getFlowByUser(req, res);

      expect(stub).to.have.been.calledWith(200);
    })

    it('Throw an exception when db call method fails', async ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {};
      const res = {
        status: (code)=>{code},
        json: (something)=>{something},
        send: (something)=>{something},
      };
  
      const stub = sinon.stub(res, 'status');
  
      const methods = listByUserMethods(collection);
      await methods.getFlowByUser(req, res);
    
      expect(stub).to.have.been.calledWith(404);
    });

  });

});

