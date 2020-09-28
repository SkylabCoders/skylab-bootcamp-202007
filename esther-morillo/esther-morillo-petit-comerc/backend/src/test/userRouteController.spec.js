const sinon = require('sinon');
const { expect } = require('chai');
const userController = require('../controllers/userRouteController');

describe('PUT user cart', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('PUT - should call status 404 filter', () => {
        const req = {
            user: {
                productId: ['01', '02'],
                cart: [],
                save: (callback) => {callback(true)},
                some: {}
            },
            body: {
                id: '01'
            }
        }
    
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        }

        const statusSpy = sinon.spy(res, 'status');
        userController.put(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    })  
    
    it('PUT - should call status 200 filter', () => {
        const req = {
            user: {
                productId: ['01', '02'],
                cart: [],
                save: (callback) => {callback(false)},
                some: {}
            },
            body: {
                id: '01'
            }
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

    it('PUT - should call status 404 of user', () => {
        const req = {            
            body: {}
        }

        const user = false;
    
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


