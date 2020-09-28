const sinon = require('sinon');
const { expect } = require('chai');
const userController = require('../controllers/usersRouteController');
const User = require('../models/userModel');

describe('USERS Route', () => {
    let req;
    let res;
    let users;
    let UserMock;
    let controller;
    let error;

    beforeEach(() => {
        error = false;

        req = {
            query: {
                sub: '01'
            }
        };

        res = {
            status: () => {},
            send: () => {},
            json: () => {}
        };

        user = {}  
        
        UserMock = {
            findOne: sinon.stub().returnsThis(),
            populate: sinon.stub().returnsThis(),
            populate: sinon.stub().returnsThis(),
            exec: sinon.stub().callsFake(function fakeFn(callback) {
                callback(error, users);
            })
        }

        controller = userController(UserMock);
    })

    afterEach(() => {
        sinon.restore();
    })

    it('GET - should call 200 when search a user', () => {  

        UserMock = {
            findOne: sinon.stub().returnsThis(),
            populate: sinon.stub().returnsThis(),
            populate: sinon.stub().returnsThis(),
            exec: sinon.stub().callsFake(function fakeFn(callback) {
                callback(false, users);
            })
        }

        const statusSpy = sinon.spy(res, 'status');        
        controller.get(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    });

    it('GET - should call 400', () => {   
        error = true;

        const statusSpy = sinon.spy(res, 'status');
        const controller = userController(UserMock);
        controller.get(req, res);
        expect(statusSpy.calledWith(400)).to.be.true;
    });

    it('GET - should call 200 json', () => {  
        const jsonSpy = sinon.spy(res, 'json');
        const controller = userController(UserMock);
        controller.get(req, res);
        expect(jsonSpy.callCount).to.equal(1);
    });
});

describe ('POST users', () => {
    let req;
    let res;
    let UserMock;
    let error;
    let user;

    beforeEach(() => {
        req = {
            body: 1
        };

        res = {
            status: () => {},
            json: () => {},
            save: () => {}
        };        
    })

    afterEach(() => {
        sinon.restore();
    })

    it('POST - should call status 200', () => {
        let query = req.body;
        error = false;
        user = true;

        UserMock = {
            findOne: (query, callback) => {callback(error, user)}
        }

        const statusSpy = sinon.spy(res, 'status');
        const controller = userController(UserMock);
        controller.post(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    })

    it('POST - should call status 404', () => {
        let query = req.body;
        error = true;
        user = false;

        UserMock = {
            findOne: (query, callback) => {callback(error, user)}
        }

        const statusSpy = sinon.spy(res, 'status');
        const controller = userController(UserMock);
        controller.post(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    })

    it('should response 201 when user save', () => {
        let req = {
            body: {}
        }
    
        error = false;
        user = false;


        const findOneFake = sinon.fake.yields(error, user);
        sinon.replace(User, 'findOne', findOneFake)
        const statusSpy = sinon.spy(res, 'status');
        userController(User).post(req, res);
        expect(statusSpy.calledWith(201)).to.be.true;
    })
    
})


