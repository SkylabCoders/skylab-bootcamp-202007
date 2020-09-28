const { expect } = require('chai');
const sinon = require('sinon');
const { spy } = require('sinon');
const getItem = require('../controllers/getItemRouteController');
const User = require('../models/userModel')

let res = {}
let detail = '';
const req = {};
let entryData = {
    speciality: 'frontend',
    category: 'junior',
    content: 'text',
    company: 'company name',
    difficulty: 5,
    userId: 'A1'
}

describe('getItemRouteController Specs', () => {
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
    it('Should call status only once', () => {

        const Item = {
            find: (query, fn) => {
                fn(false, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);

        getItem(Item).get(req, res);
        expect(jsonFaker.calledOnceWith(detail)).to.equal(true)

    });
    it('Should call status only once', () => {

        const Item = {
            find: (query, fn) => {
                fn(true, detail);
            }
        }
        const jsonFaker = sinon.fake();
        sinon.replace(res, 'send', jsonFaker);

        getItem(Item).get(req, res);
        expect(jsonFaker.called).to.equal(true)

    });



    it('Should return an error', () => {
        const Item = '';
        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);

        getItem(Item).post(req, res);

        expect(jsonFaker.calledOnceWith({
            error: {
                code: 4,
                message: 'Incorrect params Request.'
            }
        })).to.equal(true);
        expect(statusFaker.calledOnceWith(400)).to.equal(true)
    });


    it('Should a error on save response', () => {
        entryData.speciality = 'fullstack';
        entryData.category = 'senior';
        const Item = function (data) {
            this.save = (fn) => {

                fn(true, false)
            }
            this.data = data

        }
        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        req.body = entryData;


        getItem(Item).post(req, res);

        expect(jsonFaker.calledOnceWith({
            error: {
                code: 0,
                message: 'Mongoose Server Error on save'
            }
        })).to.equal(true);
        expect(statusFaker.calledOnceWith(500)).to.equal(true)
    });

    it('Should a error on save response', () => {
        entryData.speciality = 'frontend';

        const Item = function (data) {
            this.save = (fn) => {

                fn(true, false)
            }
            this.data = data

        }
        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        req.body = entryData;


        getItem(Item).post(req, res);

        expect(jsonFaker.calledOnceWith({
            error: {
                code: 0,
                message: 'Mongoose Server Error on save'
            }
        })).to.equal(true);
        expect(statusFaker.calledOnceWith(500)).to.equal(true)
    });


    it('Should a error on save response', () => {

        entryData.speciality = 'backend';
        entryData.category = 'junior';
        const Item = function (data) {
            this.save = (fn) => {

                fn(false, true)
            }
            this.data = data

        }
        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        const userFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        sinon.replace(User, 'findOneAndUpdate', userFaker)
        req.body = entryData;
        getItem(Item).post(req, res);

        expect(userFaker.called).to.equal(true)
    });
    it('Should a error on save response', () => {

        entryData.speciality = 'bnd';
        const Item = function (data) {
            this.save = (fn) => {

                fn(false, true)
            }
            this.data = data

        }
        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        const userFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        sinon.replace(User, 'findOneAndUpdate', userFaker)
        req.body = entryData;
        getItem(Item).post(req, res);

        expect(userFaker.called).to.equal(true)
    });


    it('Should return an error 400 on PATCH', () => {

        const Item = {
            findOne: (quer, cb) => {
                cb(true, false)
            }
        };
        //req.body._id = 10

        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        req.body = entryData;
        getItem(Item).patch(req, res);

        expect(statusFaker.calledOnceWith(400)).to.equal(true)
    });
    it('Should return an error 500 on PATCH', () => {

        const Item = {
            findOne: (quer, cb) => {
                cb(true, false)
            }
        };
        req.body._id = 10

        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        req.body = entryData;
        getItem(Item).patch(req, res);

        expect(statusFaker.calledOnceWith(500)).to.equal(true)
    });
    it('Should return error without status', () => {
        const success = {
            save: (cb) => {
                cb(true, false)
            }
        }
        const Item = {
            findOne: (quer, cb) => {
                cb(false, success)
            }
        };
        req.body._id = 10

        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        req.body = entryData;
        getItem(Item).patch(req, res);

        expect(statusFaker.called).to.equal(false)
    });

    it('Should return ok data with status 200 on PATCH', () => {
        const success = {
            save: (cb) => {
                cb(false, true)
            }
        }
        const Item = {
            findOne: (quer, cb) => {
                cb(false, success)
            }
        };
        req.body._id = 10

        const jsonFaker = sinon.fake();
        const statusFaker = sinon.fake();
        sinon.replace(res, 'json', jsonFaker);
        sinon.replace(res, 'status', statusFaker);
        req.body = entryData;
        getItem(Item).patch(req, res);

        expect(statusFaker.calledOnceWith(200)).to.equal(true)
    });
});