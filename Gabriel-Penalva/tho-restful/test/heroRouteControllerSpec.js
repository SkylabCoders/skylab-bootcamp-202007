const should = require('should');
const sinon = require('sinon');
const { expect } = require('chai');
const debug = require('debug');
const heroController = require('../controllers/heroRouteController');

let req
let res
let controller



describe('Hero Controller', () => {
    beforeEach(() => {

        req = {
            body: {},
            query: {}
        };
        res = {
            status: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };
    }

    )
    describe('POST', () => {
        it('should respound 400 when name is missing', () => {
            // assert psot is undefined
            function Hero() {

                function save() { }
                return { save }
            };
            controller = heroController(Hero)
            controller.post(req, res);
            res.status.calledWith(400).should.equal(true, 'Bad status, name is not required')
            res.send.calledWith('Name is required').should.equal(true)
        })
        it('Should respound 201 when name is there', () => {

            req.body.name = "gabriel";
            controller.post(req, res);
            res.status.calledWith(201).should.equal(true, 'Bad status, need a name')

        })
    });
    describe(`GET`, () => {
        it('Should find a empty object', () => {
            const Hero = {

                find: (query, f) => {
                    f()
                    expect(query).to.deep.equal({})
                }
            }

            controller = heroController(Hero)
            controller.get(req, res);


        })
    });
});