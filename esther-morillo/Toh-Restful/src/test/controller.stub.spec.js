const  { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteControler');

describe.skip('Heroes Controller', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('should call status only once', () => {
       const Hero = function () {
           this.save = () => {};
       };

       const req = {
           body: {}
       };

       const res = {
           status: () => {},
           send: () => {},
           json: () => {}
       }

       const statusStub = sinon.stub(res, 'status');
       const sendStub = sinon.stub(res, 'send');
       const jsonStub = sinon.stub(res, 'json');

       controller(Hero).post(req, res);

       expect(statusStub.callCount).to.equal(1);
       expect(sendStub.callCount).to.equal(1);
       expect(sendStub.calledWith('Name is required!')).to.be.true;
       expect(jsonStub.notCalled).to.true;

    });

    /* it('should response with status 400', () => {
        
    });


    it('should call find without query', () => {
     
    it('should call find with a query', () => {
       
    }) */
})