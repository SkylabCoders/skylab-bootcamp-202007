const sinon = require('sinon');
const { expect } = require('chai');
const userRouteController = require('../controllers/userRouteController');
const User = require('../models/userModel');

describe('USER ROUTE CONTROLLER', () => {
    afterEach(() => {
        sinon.restore();
    });
    //put
    it('should return status 404 when save throws error', () => {
        const req = {
            user: { save: () => {}, favoriteBooks: [{}] },
            body: { book: 'something' }
        };
        const res = {
            status: () => {},
            send: () => {},
            json: () => {}
        };

        const saveFake = sinon.fake.yields(true);
        sinon.replace(req.user, 'save', saveFake);
        const statusSpy = sinon.spy(res, 'status');
        userRouteController.put(req, res);

        expect(statusSpy.calledWith(404)).to.be.true;
    });

    it('should return status 200 when save does not throws error', () => {
        const req = {
            user: { save: () => {}, favoriteBooks: [{}] },
            body: { book: 'something' }
        };
        const res = {
            status: () => {},
            json: () => {}
        };
        const saveFake = sinon.fake.yields(false);
        sinon.replace(req.user, 'save', saveFake);
        const statusSpy = sinon.spy(res, 'status');
        userRouteController.put(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    });

    it('should return status 404 when user does not exist', () => {
        const req = {
            user: null,
            body: { book: 'something' }
        };
        const res = {
            status: () => {},
            send: () => {}
        };

        const statusSpy = sinon.spy(res, 'status');
        userRouteController.put(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    });
    //get
    it('should return status 404 when findOne throws error', () => {
        const req = {
            params: {
                id: null
            }
        };
        const res = {
            status: () => {},
            send: () => {}
        };
        const query = {
            sub: null
        };
        const findOneFake = sinon.fake.yields(query, true);
        sinon.replace(User, 'findOne', findOneFake);
        const statusSpy = sinon.spy(res, 'status');
        userRouteController.get(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    });

    it('should return status 200 when user exist', () => {
        const req = {
            params: {
                id: 1
            }
        };
        const res = {
            status: () => {},
            json: () => {}
        };
        const query = {
            sub: 1
        };
        const findOneFake = sinon.fake.yields(false, 'vanesa');
        sinon.replace(User, 'findOne', findOneFake);
        const statusSpy = sinon.spy(res, 'status');
        userRouteController.get(req, res);
        expect(statusSpy.calledWith(200)).to.be.true;
    });
});
