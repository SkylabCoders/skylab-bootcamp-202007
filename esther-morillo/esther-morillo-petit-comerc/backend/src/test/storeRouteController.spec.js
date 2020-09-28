const sinon = require('sinon');
const { expect } = require('chai');
const userController = require('../controllers/storeRouteController');
const User = require('../models/userModel');
const Store = require('../models/storeModel');

describe('GET - Store Route Controller', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('should call status 200', () => {
        const req = {            
            store: {}
        }
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }

        const statusSpy = sinon.spy(res, 'status');
        userController.get(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    }) 

    it('should call status 400', () => {
        const req = {}
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }

        const statusSpy = sinon.spy(res, 'status');
        userController.get(req, res);
        expect(statusSpy.calledWith(400)).to.be.true;
    }) 

});

describe('PUT - Store Route Controller', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('should update form', () => {
        const req = {            
            item: {
                save: (callback) => {callback()}
            },
            body: [1]
        }
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }

        const statusSpy = sinon.spy(res, 'status');
        userController.put(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    }) 

    it('should send a error', () => {
        const req = {}
        const error = true;
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }

        const statusSpy = sinon.spy(res, 'status');
        userController.put(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    }) 
});

describe('DELETE - Store Route Controller', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('should error status 400 when delete store', () => {   
        const req = {
            item: {
                remove: (callback) => {callback()}
            }
        }
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }               

        const findFake = sinon.fake.yields('errorFind', 'deleteStatus');
        sinon.replace(Store, 'find', findFake);
        const statusSpy = sinon.spy(res, 'status');
        userController.deleter(req, res);
        expect(statusSpy.calledWith(400)).to.be.true;
    }); 

    it('should error status 200 when delete store', () => {   
        const req = {
            item: {
                remove: (callback) => {callback()}
            }
        }
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }               

        const findFake = sinon.fake.yields('errorFind', 'deleteStatus');
        sinon.replace(Store, 'findById', findFake);
        const statusSpy = sinon.spy(res, 'status');
        userController.deleter(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    });

    xit('should doing store find', () => {   
        const req = {
            item: {
                remove: (callback) => {callback()}
            }
        }
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        } 
        
        const user = {
            owner: false,
            store: [],
            save: () => {}
        }

        const findFake = sinon.fake.yields('findByIdError', user);
        sinon.replace(Store, 'findById', findFake);
        const statusSpy = sinon.spy(res, 'status');
        userController.deleter(req, res);
        expect(statusSpy.calledWith(user)).to.be.true;
    });

});