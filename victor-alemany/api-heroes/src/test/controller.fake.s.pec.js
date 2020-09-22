const {expect} = require('chai');
const sinon = require('sinon');
const controller = require('../controller/heroesRouteController');

describe('HeroesController test', ()=>{

    afterEach(()=>{
        // Para restaurar el estado inicial
        sinon.restore();
    })

    it('should call with a query',()=>{
        //expect(true).to.equal(true);

        const Hero = {
            find: ()=>{}
        };

        const req = {
            query: {
                id: "myId"
            }
        }

        const res = {
           
        }

        const findFake = sinon.fake(Hero,'find');

        controller(Hero).get(req, res);

        expect(findFake.called).to.be.true;

    })
})
