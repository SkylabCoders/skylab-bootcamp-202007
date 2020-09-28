const {expect} = require('chai');
const {describe} = require('mocha')
const sinon = require('sinon');
const controller = require('../controller/userRouterController');

describe(' User router Controller test', ()=>{

    afterEach(()=>{

        sinon.restore();
    })

    it('should returns status code 404 when data cant be saved',()=>{

        const req = {
            user:{
                id: 1,
                save: (callback)=>{callback('error',null)}
            },
            body:{
                name: 'test',
                lastname: 'test',
                address: 'test',
                phone: 'test',
                email:'test',
                city: 'test'
            }
        }

        const res = {
            status: () =>{},
            send:()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(statusSpy.calledWith(404)).to.be.true;

    })

    it('should returns status code 200 user is updated successfully',()=>{

        const req = {
            user:{
                id: 1,
                save: (callback)=>{callback(null,'')}
            },
            body:{
                name: 'test',
                lastname: 'test',
                address: 'test',
                phone: 'test',
                email:'test',
                city: 'test'
            }
        }

        const res = {
            status: () =>{},
            json:()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(statusSpy.calledWith(200)).to.be.true;

    })

    it('should returns an user when request receives values',()=>{

        const req = {
            user:{
                id: 1,
                name: 'test',
                lastname: 'test',
                address: 'test',
                phone: 'test',
                email:'test',
                city: 'test',
                save: (callback)=>{callback(null,'ok')}
            },
            body:{
                name: 'test',
                lastname: 'test',
                address: 'test',
                phone: 'test',
                email:'test',
                city: 'test'
            }
        }

        const res = {
            json: () =>{},
            status: ()=>{}
        }

        const jsonSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(jsonSpy.calledWith()).to.be.true;

    })

})
