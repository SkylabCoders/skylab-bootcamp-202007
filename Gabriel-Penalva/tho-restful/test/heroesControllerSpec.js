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
            status: () => { },
            json: () => { },
            send: () => { }
        };
        req = {
            body: {},
            query: {},
            hero: {
                save: (fn) => {
                    fn();
                    res.send.should.equal(true);
                }
            }
        };
    }

    )
    describe('GET', () => {

        it('should call json with hero prop of req', () => {
            // assert psot is undefined
            const statusFaker = sinon.fake();
            const jsonFaker = sinon.fake();

            sinon.replace(res, 'status', statusFaker);
            sinon.replace(res, 'json', jsonFaker);

            // const jsonStub = sinon.stub(res, 'json');
            heroController.get(req, res);
            expect(jsonFaker.calledWith(req.hero)).to.equal(true)

        })
        it('Should  be called once', () => {

            const jsonFaker = sinon.fake();
            sinon.replace(res, 'json', jsonFaker);
            heroController.get(req, res);
            expect(jsonFaker.calledOnce).to.equal(true)
        })
    });
    describe(`PUT`, () => {
        it('Should send an error', () => {
            const saveFaker = sinon.fake.throws(new Error());
            sinon.replace(req.hero, 'save', saveFaker);
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
        it('Should get an error II', () => {
            const sendFaker = sinon.fake.throws(new Error());

            sinon.replace(res, 'send', sendFaker);
            req.body = { pepe: 'hola' }

            console.log(req.body.name)
            heroController.put(req, res);

            res.json.calledWith(req.body).should.equal(true);

        })

    });
});