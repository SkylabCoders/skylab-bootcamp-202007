const {expect} = require('chai');
const {describe} = require('mocha')
const sinon = require('sinon');
const controller = require('../controller/categoriesListRouterController');

describe(' Categories Controller test', ()=>{

    afterEach(()=>{

        sinon.restore();
    })



it('Should response with 404', ()=>{
    const Category = {
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

    controller(Category).get(req,res);

    expect(statusSpy.calledWith(404)).to.be.true;
})

it('Should response with 200 when query is defined', ()=>{
    debugger
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

    const Category = {
        find: (query, callback)=>callback(null, '')
    }

    const category = [{
        id: 1
    }]
    const statusSpy = sinon.spy(res,'status');
    controller(Category).get(req,res);
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

    const Category = {
        find: (query, callback)=>callback('error', null)
    }

    const category = [{
        id: 1
    }]
    const statusSpy = sinon.spy(res,'status');
    controller(Category).get(req,res);
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

    const Category = {
        find: (query,callback)=>callback('error', null)
    }

    const category = [{
        id: 1
    }]
    const sendSpy = sinon.spy(res,'send');
    controller(Category).get(req,res);
    expect(sendSpy.calledWith('error')).to.be.true;
})

})