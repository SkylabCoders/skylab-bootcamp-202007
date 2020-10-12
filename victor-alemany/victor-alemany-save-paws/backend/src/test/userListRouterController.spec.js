const {expect} = require('chai');
const {describe} = require('mocha')
const sinon = require('sinon');
const controller = require('../controller/userListRouterController');

describe(' User list Controller test', ()=>{

    afterEach(()=>{

        sinon.restore();
    })

    it('should callss with 404 when user is not found when query is received',()=>{

        const User = {
            id: 1,
            findOne: (query,callback)=>{const error = 'ERROR! NOT FOUND!'
            callback(error)}
        };

        const req = {
            query:{
                id: 2
            }
        }

        const res = {
            status: () =>{},
            json: ()=>{},
            send: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller(User).get(req, res);

        expect(statusSpy.calledWith(404)).to.be.true;

    })

    it('should callss with 200 when user is found when query is received',()=>{

        const User = {
            id: 1,
            findOne: (query,callback)=>{
            callback(null,'ok')}
        };

        const req = {
            query:{
                id: 1
            }
        }

        const res = {
            status: () =>{},
            json: (user)=>{},
            send: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller(User).get(req, res);

        expect(statusSpy.calledWith(200)).to.be.true;

    })

    it('Should response with error when it try to save an User', ()=>{
        
        const User = function constructor(){
            this.save = ()=>{};
        };

        const req = {
            
        }

        const res = {
            status: ()=>{},
            send: () => {},
            json: ()=>{}
        }
  
        const statusSpy = sinon.spy(res,'status');
        controller(User).post(req,res);
        expect(statusSpy.calledWith(400)).to.be.true;
    })

    it('Should response with status 200 when User is saved', ()=>{
        
        const User = function constructor(){
            this.save = ()=>{};
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
        controller(User).post(req,res);
        expect(statusSpy.calledWith(200)).to.be.true;
    })

})
