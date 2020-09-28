const routes = require('./../routes/alertRoutes');
const {expect} = require('chai');
const {describe} = require('mocha');
const sinon = require('sinon');
const express = require('express');
const mockServer = express();

describe('Alert router scenario', () => {

	afterEach(()=>{

        sinon.restore();
	})
	
	it('should match', () => {
		expect(routes('test')).to.exist;
	});
	
    it('should call find with id',()=>{

        const Alert = {
            findById: (callback)=>{callback(null,'ok')}
        };

        const req = {
            params: 1
        }

        const res = {
            status: () =>{},
            json: ()=>{},
            send: ()=>{}
        }

        const findSpy = sinon.spy(Alert,'findById');

        expect(findSpy.calledWith(1)).to.be.true;

    })

});
