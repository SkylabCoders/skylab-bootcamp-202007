const sinon = require('sinon');
const methods = require('./listRoutesController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);


describe('List Controller Tests - STUBS', ()=>{
  describe('CREATE', ()=>{
    afterEach(()=>{
      sinon.restore();
    });
    it('Should call status only once', ()=>{
      const Hero = function heroConstructor(){
        this.save = ()=>{}
      }
      const req = {
        body: {
          name: 'Bombasto'
        }
      };
      const res = {
        status: (code)=>{},
        send: ()=>{},
        json: ()=>{}
      };
      
      const statusStub = sinon.stub(res, 'status');

      methods(Hero).create(req,res);

      expect(statusStub).to.have.been.calledOnce;
    });
  });
})