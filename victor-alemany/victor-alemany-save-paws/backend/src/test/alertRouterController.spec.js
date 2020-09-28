const {expect} = require('chai');
const {describe} = require('mocha');
const sinon = require('sinon');
const controller = require('../controller/alertRouterController');

describe(' Alert Controller test', ()=>{

    afterEach(()=>{

        sinon.restore();
    })

    it('should returns status code 200 when alert is found',()=>{

        const req = {
            alert:{
                id: 1
            }
        }

        const res = {
            status: () =>{},
            json: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.get(req, res);

        expect(statusSpy.calledWith(200)).to.be.true;

    })

    it('should returns with alert object when alert is found',()=>{

        const req = {
            alert:{
                id: 1
            }
        }

        const res = {
            status: () =>{},
            json: ()=>{}
        }

        const jsonSpy = sinon.spy(res,'json');

        controller.get(req, res);

        expect(jsonSpy.calledWith(req.alert)).to.be.true;

    })

    it('should returns status code 404 when alert is not found',()=>{

        const req = {
   
        }

        const res = {
            status: () =>{},
        }

        const statusSpy = sinon.spy(res,'status');

        controller.get(req, res);

        expect(statusSpy.calledWith(404)).to.be.true;

    })

    it('should returns status code 404 when data cant be saved',()=>{

        const req = {
            alert:{
                id: 1,
                save: (callback)=>{callback('error',null)},
                followed: [{some: {}}]
            },
            body:{
                active: true,
                comments: 'test',
                followed: '1'
            }
        }

        const res = {
            status: () =>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(statusSpy.calledWith(400)).to.be.true;

    })

    it('should returns status code 200 user is deleted',()=>{

        const req = {
            alert:{
                id: 1,
                save: (callback)=>{callback(null,'ok')},
                followed: [{some: {},filter:{}}]
            },
            body:{
                active: true,
                comments: 'test',
                followed: '1'
            }
        }

        const res = {
            status: () =>{},
            json: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(statusSpy.calledWith(200)).to.be.true;

    })

    it('should returns status code 200 when user is added',()=>{

        const req = {
            alert:{
                id: 1,
                save: (callback)=>{callback(null,'ok')},
                followed: [{some: {},filter:{}}]
            },
            body:{
                active: true,
                comments: 'test',
                followed: '1'
            }
        }

        const res = {
            status: () =>{},
            json: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(statusSpy.calledWith(200)).to.be.true;

    })

})
