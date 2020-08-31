/* spy con mocha y chai */

const {expect} = require('chai');
const sinon = require('sinon')
const controller = require('../controllers/heroesRouteController')
const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller v2', () => {
    it('post, should respond with status 201', () => {
        const Hero = function heroConstructor() {
            this.save = () => {};

        };

        const req = {
            body: {
                name: 'Bombasto'
            }
        };
        const res = {
            status: sinon.spy(),
            json: sinon.spy(),
        };

        const controller = heroesController(Hero);
		controller.post(req, res);


        expect(res.status.calledWith(201)).to.be.true
    })

    it('post, should respond with status 400', () => {
        const Hero = function heroConstructor() {
            this.save = () => {};

        };

        const req = {
            body: {
            }
        };
        const res = {
            status: sinon.spy(),
            send: sinon.spy()
        };

        const controller = heroesController(Hero);
		controller.post(req, res);


        expect(res.status.calledWith(400)).to.be.true
    })

    it('get, should call find without query', () => {
        const Hero = {
            find: () => {}
        }

        

        const req = {};
        const res = {
            
        };

        const findSpy = sinon.spy(Hero, 'find')

        const controller = heroesController(Hero);
		controller.get(req, res);


        expect(findSpy.called).to.be.true
    })

    it('get, should call find with a query', () => {
        const Hero = {
            find: () => {}
        }

        

        const req = {
            query: {
                id: 'myId'
            }
        };
        const res = {
            
        };

        const findSpy = sinon.spy(Hero, 'find')

        const controller = heroesController(Hero);
		controller.get(req, res);


        expect(findSpy.calledWith({id: 'myId'})).to.be.true
    })
})