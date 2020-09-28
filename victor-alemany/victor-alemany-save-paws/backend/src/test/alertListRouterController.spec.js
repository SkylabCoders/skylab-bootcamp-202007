const {expect} = require('chai');
const {describe} = require('mocha');
const sinon = require('sinon');
const controller = require('../controller/alertListRouterController');

describe(' Alert Controller test', ()=>{

    afterEach(()=>{

        sinon.restore();
    })

    it('should call find without query',()=>{

        const Alert = {
            find: ()=>{}
        };

        const req = {
            
        }

        const res = {
            status: () =>{},
            json: ()=>{},
            send: ()=>{}
        }

        const findSpy = sinon.spy(Alert,'find');

        controller(Alert).get(req, res);

        expect(findSpy.called).to.be.true;

    })

    it('should call with a query',()=>{

        const req = {
            query: {
                id: 1
            }
        }

        const res = {
            json: ()=> {},
            status: ()=> {},
            send: () => {}
        }

        const Alert = {
            find: ()=>{}
        }

        const alert = [{
            id: 1
        }]
        const findFake = sinon.fake.yields(false,(false,alert));
        sinon.replace(Alert,'find',findFake);
        const jsonSpy = sinon.spy(res,'json');
        const statusSpy = sinon.spy(res,'status');

        controller(Alert).get(req,res);

        expect(jsonSpy.calledWith(alert)).to.be.true;
        expect(statusSpy.calledWith(200)).to.be.true;

    })

    it('Should response with 404', ()=>{
        const Alert = {
            find: (query,callback)=>{
                const error = 'ERROR! NOT FOUND!'
                callback(error)}
        }

        req = {}

        res = {
            status:()=>{},
            json: ()=> {},
            send: ()=> {}
        }

        const statusSpy = sinon.spy(res,'status');

        controller(Alert).get(req,res);

        expect(statusSpy.calledWith(404)).to.be.true;
    })

    it('Should response with 200 when query is defined', ()=>{
        const req = {
            query: {
                id: 1
            }
        }

        const res = {
            json: ()=> {},
            status: ()=> {},
            send: () => {}
        }

        const Alert = {
            find: (query, callback)=>callback(null, 'ok')
        }

        const statusSpy = sinon.spy(res,'status');
        controller(Alert).get(req,res);
        expect(statusSpy.calledWith(200)).to.be.true;
    })

    it('Should response with 404 when occurs an error', ()=>{

        const req = {
            query: {
                id: 1
            }
        }

        const res = {
            json: ()=> {},
            status: ()=> {},
            send: () => {}
        }

        const Alert = {
            find: (query, callback)=>callback('error', null)
        }

        const statusSpy = sinon.spy(res,'status');
        controller(Alert).get(req,res);
        expect(statusSpy.calledWith(404)).to.be.true;
    })

    it('Should response with error when occurs an error', ()=>{

        const req = {
            query: {
                id: 1
            }
        }

        const res = {
            json: ()=> {},
            status: ()=> {},
            send: () => {}
        }

        const Alert = {
            find: (query,callback)=>callback('error', null)
        }

        const sendSpy = sinon.spy(res,'send');
        controller(Alert).get(req,res);
        expect(sendSpy.calledWith('error')).to.be.true;
    })

    it('Should response with error when it try to save an Alert', ()=>{
        
        const Alert = function constructor(){
            this.save = (callback)=>{callback('error',null)};
        };


        const req = {
            body:{
                city:'Barcelona'
            }   
        }

        const res = {
            json: ()=> {},
            status: ()=> {},
            send: () => {}
        }
  
        const statusSpy = sinon.spy(res,'status');
        controller(Alert).post(req,res);
        expect(statusSpy.calledWith(404)).to.be.true;
    })

    it('Should response with status 200 when Alert is saved', ()=>{
        
        const Alert = function constructor(){
            this.save = (callback)=>{callback(null,'alert')};
        };

        const req = {
            body:{
                city:'Barcelona'
            }
        }

        const res = {
            json: ()=> {},
            status: ()=> {},
            send: () => {}
        }
  
        const statusSpy = sinon.spy(res,'status');
        controller(Alert).post(req,res);
        expect(statusSpy.calledWith(200)).to.be.true;
    })

    it('Should response with status 400 when dont reveives data from body', ()=>{
        
        const Alert = function constructor(){
            this.save = (callback)=>{callback(null,'alert')};
        };

        const req = {
        }

        const res = {
            status: ()=> {},
            send:()=>{}
        }
  
        const statusSpy = sinon.spy(res,'status');
        controller(Alert).post(req,res);
        expect(statusSpy.calledWith(400)).to.be.true;
    })

})
