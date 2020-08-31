// test unitario primero -> solo me interesa lo que pasa dentro de este archivo. So
// solo mira el resultado de la funcion IGNARANDO los efectos secundarios

const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');

// no importamos mocha xq sirve para correr los tests (es un test runner)

describe('Heroes Controller', () => {
    describe('POST', () => {
        it('should response status 400 when name is missing', () => {
            const Hero = function heroConstructor() {
                this.save = () => { }
            }

            const req = {
                body: {
                    name: 'Bombasto'
                }
            };
            const res = {
                status: sinon.spy(),    // usando sinon vamos a espiar a status
                json: sinon.spy(),
                send: sinon.spy()
            };

            const controller = heroesController(Hero);
            controller.post(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad status, name is required');

            res.send.calledWith('name is required').should.equal(true, 'Message is not correct');
        })
    });
})
