const sinon = require('sinon');
const{expect}=require('chai');
const controller = require('../controllers/storesRouteController');
const User = require('../models/userModel')
const Store = require('../models/storeModel')


describe ('GET - Stores Routes', () => {
    afterEach(() => {
        sinon.restore();
    });   

    it('should call find with a query with status 200', () => {        
        const req = {};
        const stores = true;
        const error = false;
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        };    
        
        const Store = {
            find: sinon.stub().returnsThis(),
            populate: sinon.stub().returnsThis(),
            exec: sinon.stub().callsFake(function fakeFn(callback) {
                callback(error, stores);
            })
        }
        
        const statusSpy = sinon.spy(res, 'status');
        controller(Store).get(req, res);        
        expect(statusSpy.calledWith(200)).to.be.true;
    });

    it('should call find with a query with status 400', () => {           
        const req = {};
        const stores = false;
        const error = true;
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        };    
        
        const Store = {
            find: sinon.stub().returnsThis(),
            populate: sinon.stub().returnsThis(),
            exec: sinon.stub().callsFake(function fakeFn(callback) {
                callback(error, stores);
            })
        }
        
        const statusSpy = sinon.spy(res, 'status');
        controller(Store).get(req, res);        
        expect(statusSpy.calledWith(400)).to.be.true;
    });
});
   

describe ('POST - Stores Routes', () => {
    afterEach(() => {
        sinon.restore();
    });   

    it("should respond status 404 when an error occurs", (done) => {
        const req = {
          body: {
            ownerId: '01',
          }
        };

        const res = {
          status: () => {},
          send: () => {},
          json: () => {},
        };

        sinon.stub(Store.prototype, 'save')
        const findByIdFake = sinon.fake.yields(true, 'Esther');
        sinon.replace(User, "findById", findByIdFake);
        const statusSpy = sinon.spy(res, "status");
        controller(Store, User).post(req, res);
        done();
        expect(statusSpy.calledWith(404)).to.be.true;
    });

    it("should respond json", (done) => {
        const req = {
          body: {}
        };

        const res = {
          status: () => {},
          send: () => {},
          json: () => {},
        };

        const user = {
            ownerId: '01',
            store: [],
            owner: '13',
            save: () => {}
        }

        sinon
            .stub(Store.prototype, 'save')
            .returns({ _id: '21' })
        const findByIdFake = sinon.fake.yields(false, user);
        sinon.replace(User, "findById", findByIdFake);
        const jsonSpy = sinon.spy(res, "json");
        controller(Store, User).post(req, res);
        done();
        expect(jsonSpy.calledWith(user)).to.be.true;
    });    
    
});
