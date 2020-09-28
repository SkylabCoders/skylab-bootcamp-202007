const sinon = require('sinon');
const listBySlugMethods = require('./listBySlugController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');

describe('LIST BY SLUG CONTROLLER test set', ()=>{

  describe('GET LIST BY SLUG function', ()=>{

    afterEach(()=>{
      sinon.restore();
    });

    it('Callback getListByUser should return 200 status if a valid user id is provided', async ()=>{
      const collection = DATABASE_CONFIG.projectsCollection;
      const req = {
        params: {
          slug: 'house-spanish-wells-bahamas'
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

      const methods = listBySlugMethods(collection);
      await methods.getItemBySlug(req, res);

      expect(stub).to.have.been.calledWith(200);
      
    })

  });

  it('Throw an exception when db call method fails', async ()=>{
    const collection = DATABASE_CONFIG.projectsCollection;
    const req = {};
    const res = {
      status: (code)=>{code},
      json: (something)=>{something},
      send: (something)=>{something},
    };

    const stub = sinon.stub(res, 'status');

    const methods = listBySlugMethods(collection);
    await methods.getItemBySlug(req, res);

    expect(stub).to.have.been.calledWith(404);
  });

})

