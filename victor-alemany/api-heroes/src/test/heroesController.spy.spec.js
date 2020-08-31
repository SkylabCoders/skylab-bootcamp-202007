const {expect} = require('chai');
const sinon = require('sinon');
const controller = require('../controller/heroesRouteController');


describe('HeroesController test', ()=>{

    afterEach(()=>{
        // Para restaurar el estado inicial
        sinon.restore();
    })

    it('should response with status 201',()=>{
        //expect(true).to.equal(true);
        
        const Hero = function constructor(){
            this.save = ()=>{};
        };
        const req = {
            body: {
                name: "Bombasto"
            }
        }
        const res = {
            status: () =>{},
            json: ()=>{}
        };

        const statusSpy = sinon.spy(res,'status');

        controller(Hero).post(req, res);

        expect(statusSpy.calledWith(201)).to.be.true;
    })

    it('should response with status 400',()=>{
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

        const statusSpy = sinon.spy(res,'status');

        controller(Hero).post(req, res);

        expect(statusSpy.calledWith(400)).to.be.true;
    })

    it('should call find without query',()=>{
        //expect(true).to.equal(true);

        const Hero = {
            find: ()=>{}
        };

        const req = {
            
        }

        const res = {
            status: () =>{},
            json: ()=>{},
            send: ()=>{}
        }

        const findSpy = sinon.spy(Hero,'find');

        controller(Hero).get(req, res);

        expect(findSpy.called).to.be.true;

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
            send: ()=>{},
            json: ()=>{}
        }

        const findSpy = sinon.spy(Hero,'find');

        controller(Hero).get(req, res);

        expect(findSpy.called).to.be.true;

    })
})
