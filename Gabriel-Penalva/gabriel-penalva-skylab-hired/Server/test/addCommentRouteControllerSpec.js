const { expect } = require('chai');
const sinon = require('sinon');
const { spy } = require('sinon');
const addCommentRouteController = require('../controllers/addCommentRouteController');
const User = require('../models/userModel')
let req = {
    body: ''
}
let detail;
let res
describe('addCommentRouteController Specs', () => {
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
        const Comment = {
            find: (query, fn) => {
                fn(false, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).post(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 4,
                message: 'Incorrect params Request'
            }
        })).to.equal(true)

    });
    it('Should return an error 500 ', () => {
        req.body = {
            textComment: 'comment',
            userId: 'A1',
            entryId: 'B2'
        }
        const Comment = function (data) {
            this.save = (query, fn) => {

                fn(true, false)
            }
            this.data = data

        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).post(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 0,
                message: 'Mongoose Server Error on save Comment'

            }
        })).to.equal(true)

    });

    it('Should return an good data ', () => {
        req.body = {
            textComment: 'comment',
            userId: 'A1',
            entryId: 'B2'
        }
        const Comment = function (data) {
            this.save = (query, fn) => {

                fn(false, 'info')
            }
            this.data = data

        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).post(req, res);

        expect(jsonFaker.called).to.equal(false)
    });

    // ---------------- PATCH CALL ---------------------//

    it('Should fail with error params response', () => {
        const Comment = {
            findOne: (query, fn) => {
                fn(false, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).patch(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 4,
                message: 'Incorrect params Request'
            }
        })).to.equal(true)

    });
    it('Should faild fail on comment findone', () => {
        req.body = {
            _id: 'comment'
        }
        const success = {
            save: (cb) => {
                cb(false, false)
            }
        }
        const Comment = {
            findOne: (query, fn) => {
                fn(true, success);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).patch(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 0,
                message: 'Mongoose Server Error on save'
            }
        })).to.equal(true)

    });

    it('Should faild for error on save', () => {
        req.body = {
            _id: 'comment'
        }
        const success = {
            save: (cb) => {
                cb(false, false)
            }
        }
        const Comment = {
            findOne: (query, fn) => {
                fn(false, success);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).patch(req, res);
        expect(jsonFaker.calledOnceWith({
            error: {
                code: 6,
                message: 'Like!'
            }
        })).to.equal(true)

    });
    it('Should faild not execute json', () => {
        req.body = {
            _id: 'comment'
        }
        const success = {
            save: (cb) => {
                cb(true, false)
            }
        }
        const Comment = {
            findOne: (query, fn) => {
                fn(false, success);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        addCommentRouteController(Comment).patch(req, res);
        expect(jsonFaker.called).to.equal(false)

    });

});