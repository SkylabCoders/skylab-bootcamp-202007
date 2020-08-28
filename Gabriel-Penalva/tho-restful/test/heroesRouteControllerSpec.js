const should = require('should');
const sinon = require('sinon');
const heroController = require('../controllers/heroRouteController')

describe('Hero Controller', () => {
    describe('POST', () => {
        it('should respound 400 when name is missing', () => {
            // assert psot is undefined
            const Hero = function lala() { this.save = () => { } }
            const req = {
                body: {
                }
            };
            const res = {
                status: sinon.spy(),
                json: sinon.spy(),
                send: sinon.spy()
            };
            const controller = heroController(Hero);
            controller.post(req, res);
            res.status.calledWith(400).should.equal(true, 'Bad status, name is not required')
            res.send.alwaysCalledWith('Name is required').should.equal(true)
        })
    });
    describe(`GET`, () => {

    });
});