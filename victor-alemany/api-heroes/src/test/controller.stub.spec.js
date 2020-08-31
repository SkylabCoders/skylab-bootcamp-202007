const {expect} = require('chai');
const sinon = require('sinon');
const controller = require('./../controller/heroesRouteController');

describe('HeroesController test', ()=>{

    afterEach(()=>{
        // Para restaurar el estado inicial
        sinon.restore();
    })

    it('should call status only once',()=>{
        //expect(true).to.equal(true);
        const Hero = function constructor(){
            this.save = ()=>{};
        };

        const req = {
            body: {
            }
        }

        const res = {
            status: (code) =>{},
            json: ()=>{},
            send: ()=>{}
        };

        const statusStub = sinon.stub(res,'status');
        const sendStub = sinon.stub(res,'send');
        const jsonStub = sinon.stub(res,'json');
     

        controller(Hero).post(req, res);

        expect(statusStub.callCount).to.equal(1);
        expect(sendStub.callCount).to.equal(1);
        expect(sendStub.calledWith('Name is required!')).to.be.true;
        expect(jsonStub.notCalled).to.true;
    })

    it.skip('should ',()=>{
        //expect(true).to.equal(true);
 
    })

    it.skip('should ',()=>{
        //expect(true).to.equal(true);
    })

    it.skip('should ',()=>{
        //expect(true).to.equal(true);

    })
})
