const sinon = require('sinon');
const { expect } = require('chai');
const controller = require('../controllers/productRouteController');

describe('PRODUCT Route - PUT for to delete product in cart', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('should call status 200', () => {
        const req = {
            user: {
                cart: ['01', '02'],
                save: (callback) => {callback()}
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
        controller.put(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;

    });

    it('should call status 404', () => {
        const req = {
            user: {
                cart: [],
                save: (callback) => {callback(true)}
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
        controller.put(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    })

    it('should call user with status 404', () => {
        const req = {            
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
        controller.put(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    })
})

