const { expect } = require('chai');
const sinon = require('sinon');
const loginRouteController = require('../controllers/loginRouteController');

let req = {
    body: ''
}
let detail;
let res
describe('loginRouteController Specs', () => {
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

        loginRouteController(User).post(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 4,
                message: 'Incorrect params Request'
            }
        })).to.equal(true)

    });
    it('Should fail with mangoose error  response', () => {
        req.body = {
            username: 'gab',
            password: '123'
        }
        detail = [{ password: '1' }]
        const User = {
            find: (query, fn) => {
                fn(true, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        loginRouteController(User).post(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 0,
                message: 'Mongoose Server Error on search'
            }
        })).to.equal(true)

    });
    it('Should work with sending a good response and token response', () => {
        req.body = {
            username: 'gab',
            password: '123'
        }
        detail = [{ password: '123' }]
        const User = {
            find: (query, fn) => {
                fn(false, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        loginRouteController(User).post(req, res);
        expect(jsonFaker.called).to.equal(true)

    });
    it('Should return an error for incorrect password', () => {
        req.body = {
            username: 'gab',
            password: '123'
        }
        detail = [{ password: '13' }]
        const User = {
            find: (query, fn) => {
                fn(false, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        loginRouteController(User).post(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 3,
                message: 'Incorrect password or Username'
            }
        })).to.equal(true)

    });
});