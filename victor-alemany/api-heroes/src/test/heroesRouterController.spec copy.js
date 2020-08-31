// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');

const heroesController = require('../controller/heroesRouteController');

describe('heroes route controller', () => {

    it('POST should response status 201 when name is defined', () => {

        // Primera parte de setup de 
        // asignamos this.save porque es una función constructora que recibe una función
        const Hero = function heroConstructor() {
            this.save = () => { };
        }

        const req = {
            body: { name: "Bombasto" }
        };
        const res = {
            // stub / spy / mock mockeas la función en este caso la función de status del método post. Sinon nos permite con
            // el método spy(), "espiar" la función status
            status: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };

        // Segunda parte de ejecución de los test
        const controller = heroesController(Hero);

        controller.post(req, res);

        // calledWith método de sinon y should es de should
        res.status.calledWith(201).should.equal(true);

        // res.status.calledWith(400).should.equal(true,'Bad status, name is required');

        // res.send.calledWith('Name is required').should.equal(true,'Message is not correct!');

    })

    it('POST should response status 400 when name is missing', () => {

        // Primera parte de setup de 
        // asignamos this.save porque es una función constructora que recibe una función
        const Hero = function heroConstructor() {
            this.save = () => { };
        }

        const req = {
            body: {}
        };

        const res = {
            // stub / spy / mock mockeas la función en este caso la función de status del método post. Sinon nos permite con
            // el método spy(), "espiar" la función status
            status: sinon.spy(),
            json: sinon.spy(),
            send: sinon.spy()
        };

        // Segunda parte de ejecución de los test
        const controller = heroesController(Hero);

        controller.post(req, res);

        // calledWith método de sinon y should es de should
        // res.status.calledWith(201).should.equal(true);

        res.status.calledWith(400).should.equal(true, 'Bad status, name is required');

        res.send.calledWith('Name is required!').should.equal(true, 'Message is not correct!');

    })

    it('GET BY ID should response with hero with same id', () => {
        // Primera parte de setup de 
        // asignamos this.save porque es una función constructora que recibe una función

        const hero = function heroConstructor() {
            this.find = () => { };
        }

        const req = {
            query: {
                id: 1
            }
        };

        const newQuery = {
        };

        newQuery.id = req.query.id;

        const Hero = {
            id: 1,
            name: "Bombasto"
        };

        /* json: Hero.find(newQuery, (hero,error) => {
                return hero;
            }),

        */

        const res = {
            status: sinon.spy(),
            send: sinon.spy()
        }

        const controller = heroesController(hero);

        controller.get(req, res);

        res.status.calledWith(201).should.equal(true);

    })
})