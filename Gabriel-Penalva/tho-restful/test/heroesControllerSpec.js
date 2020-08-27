const should = require('should');
const sinon = require('sinon');
const { expect } = require('chai');
const debug = require('debug');
const heroController = require('../controllers/heroesRouteController');

let req
let res



describe('Heroes Controller', () => {
    beforeEach(() => {


        res = {
            status: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };
        req = {
            body: {},
            query: {},
            hero: {
                save: (fn) => {
                    fn();
                    res.send.calledOnce.should.equal(true);
                }
            }
        };
    }

    )
    describe('GET', () => {

        it('should call json with hero prop of req', () => {
            // assert psot is undefined

            // const jsonStub = sinon.stub(res, 'json');
            heroController.get(req, res);
            res.json.calledWith(req.hero).should.equal(true, 'Get doesent find correct type')

        })
        it('Should  be called once', () => {
            heroController.get(req, res);
            res.json.calledOnce.should.equal(true)
        })
    });
    describe(`PUT`, () => {
        it('Should send an error', () => {
            heroController.put(req, res);
        })
        it('Should invoque json wirh hero and once', () => {

            req.body = { name: 'hola' }
            heroController.put(req, res);
            res.json.calledOnce.should.equal(true)
            res.json.calledWith(req.hero).should.equal(true)

        })
        it('Should invoque json wirh user', () => {

            req.body = { user: 'hola' }
            heroController.put(req, res);
            res.json.calledWith(req.body).should.equal(true);

        })
        it('Should get an error', () => {
            req.body = { pepe: 'hola' }

            console.log(req.body.name)
            heroController.put(req, res);

            res.json.calledWith(req.body).should.equal(true);

        })

    });
});