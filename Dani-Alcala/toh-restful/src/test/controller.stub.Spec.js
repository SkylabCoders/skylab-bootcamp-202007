

const {expect} = require('chai');
const sinon = require('sinon')
const controller = require('../controllers/heroesRouteController')
const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
    afterEach(() => {
        sinon.restore()
    })
    it('should call status only once', () => {
        const Hero = function heroConstructor() {
            this.save = () => {};

        };

        const req = {
            body: {
            }
        };
        const res = {
            status: () => {},
            send: () => {}
        };

        const statusStub = sinon.stub(res, 'status')

        const controller = heroesController(Hero);
		controller.post(req, res);


        expect(statusStub.callCount).to.equal(1)
    })

    it('should respond with status 400', () => {
        
    })

    it('get, should call find without query', () => {
        
    })

    it('get, should call find with a query', () => {
        
    })
})