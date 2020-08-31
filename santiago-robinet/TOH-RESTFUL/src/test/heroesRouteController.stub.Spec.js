const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../../controllers/heroesRoutesController');

describe('Heroes Controller Stub', () => {

    afterEach(() => {
        sinon.restore();
    })
    
    it('should call status once', () => {

        
        const Hero = function ()  {
            this.save = () => {};
        };
        const req = {
            body: {}
        };
        
        const res = {
            status: (code) => {},
            send: () => {}
            
        };
        
        const statusStub = sinon.stub(res, 'status');

        controller(Hero).post(req, res);

        expect(statusStub.callCount).to.equal(1);
    })

    it('should respond with status 400', () => {
      
    })

      
    it('should call find without a query', () => {
       
    })

    it('should call find with a query', () => {
      
    })
  

   
    
})
