const sinon = require('sinon');
const { expect } = require('chai');
const controller = require('../controllers/productsRouteController');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const Store = require('../models/storeModel');

describe ('GET - Products Routes', () => {
    afterEach(() => {
        sinon.restore();
    });   

    it('should call find with a query with status 400', () => {        
        const req = {};
        const query = {}
        const product = false;
        const error = true;
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        };    
        
        const findFake = sinon.fake.yields(error, product);
        sinon.replace(Product, 'find', findFake);
        const statusSpy = sinon.spy(res, 'status');
        controller(Product).get(req, res);        
        expect(statusSpy.calledWith(400)).to.be.true;
    });

    it('should call find with a query with status 200', () => {        
        const req = {};
        const query = {}
        const product = true;
        const error = false;
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        };    
        
        const findFake = sinon.fake.yields(error, product);
        sinon.replace(Product, 'find', findFake);
        const statusSpy = sinon.spy(res, 'status');
        controller(Product).get(req, res);        
        expect(statusSpy.calledWith(200)).to.be.true;
    });   
});

describe ('POST - Products Routes', () => {
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

        sinon.stub(Product.prototype, 'save')
        const findByIdFake = sinon.fake.yields(true, 'Esther');
        sinon.replace(User, "findById", findByIdFake);
        const statusSpy = sinon.spy(res, "status");
        controller(Product, User).post(req, res);
        done();
        expect(statusSpy.calledWith(404)).to.be.true;
    });

    it("should respond with json", (done) => {
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

        const store = {
            products: [],
            save: () => {}
        }

        sinon
            .stub(Product.prototype, 'save')
            .returns({ _id: '21' })
        const findByIdFake = sinon.fake.yields(false, store);
        sinon.replace(User, "findById", findByIdFake);
        const jsonSpy = sinon.spy(res, "json");
        controller(Product, User).post(req, res);
        done();
        expect(jsonSpy.calledWith(store)).to.be.true;
    });

    
   
    
});





