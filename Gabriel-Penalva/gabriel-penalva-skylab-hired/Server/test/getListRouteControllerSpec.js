const { expect } = require('chai');
const sinon = require('sinon');
const getListController = require('../controllers/getListRouteController');


let req = {
    params: ''
}
let detail;
let res

describe('GetListRouteControllerSpec Specs', () => {
    beforeEach(() => {
        detail = 'expected'
        res = {
            json: () => detail,
            send: (err) => err,
            status: () => 'num err'
        }

    })
    afterEach(() => {
        sinon.restore();
    })
    it('Should fail with error params response', () => {
        const User = {
            find: (query, fn) => {
                fn(false, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        getListController(User).get(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 4,
                message: 'Incorrect params Request.'
            }
        })).to.equal(true)

    });
    it('Should fail with error on exception response', () => {
        req.params = { list: [1, 2, 3] }
        req.query = { userId: '5f5fb6cf3b98c01681adb4cb' }
        const User = {
            find: () => { return User },
            populate: (param) => { return User },
            exec: (cb) => {
                cb(true, false)
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        getListController(User).get(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 0,
                message: 'Mongoose Server Error on search'
            }
        })).to.equal(true)
    });
    it('Should work and return the correct message', () => {
        req.params = { list: [1, 2, 3] }
        req.query = { userId: '5f5fb6cf3b98c01681adb4cb' }
        const User = {
            find: () => { return User },
            populate: (param) => { return User },
            exec: (cb) => {
                cb(false, [false])
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        getListController(User).get(req, res);
        expect(jsonFaker.called).to.equal(true)
    });

});
