const sinon = require('sinon');
const { expect } = require('chai');
const usersRouteController = require('../controllers/usersRouteController');
const User = require('../models/userModel');

describe('USERS ROUTER CONTROLLER', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should return status 404 when findOne throws error', () => {
        const req = {
            body: 'something'
        };
        const res = {
            status: () => {},
            json: () => {}
        };
        const findOneFake = sinon.fake.yields(true, 'something');
        sinon.replace(User, 'findOne', findOneFake);
        const statusSpy = sinon.spy(res, 'status');
        usersRouteController.post(req, res);

        expect(statusSpy.calledWith(404)).to.be.true;
    });

    it('should call a json with a user', () => {
        const req = {
            body: 'something'
        };
        const res = {
            status: () => {},
            json: () => {}
        };
        const findOneFake = sinon.fake.yields(false, 'vanesa');
        sinon.replace(User, 'findOne', findOneFake);
        const jsonSpy = sinon.spy(res, 'json');
        usersRouteController.post(req, res);

        expect(jsonSpy.calledWith('vanesa')).to.be.true;
    });

    it('should call status with 201', () => {
        const req = {
            body: {
                sub: 'a1b2c3',
                userEmail: 'vanesa@gmail.com',
                userNickname: 'vanesa',
                favoriteBooks: [{}, {}]
            }
        };
        const res = {
            status: () => {},
            json: () => {}
        };
        const findOneFake = sinon.fake.yields(false, null);
        sinon.replace(User, 'findOne', findOneFake);
        const statusSpy = sinon.spy(res, 'status');
        usersRouteController.post(req, res);
        expect(statusSpy.calledWith(201)).to.be.true;
    });
});
