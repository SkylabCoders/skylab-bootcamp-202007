const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');


describe('Heroes controller', () => {
    afterEach(() => {
        sinon.restore();
    })
    it('should respond with status 201', () => {



        const statusStub = sinon.stub();
        controller(Hero).post(req, res);

        expect(statusSpy.calledWith(201)).to.be.true;
    });

    it('should call fins without query', () => {
        const Hero = {
            find: () => { }
        };

        const req = {};

        const res = {};



        const findSpy = sinon.spy(Hero, 'find');

        controller(Hero).get(req, res);

        expect(findSpy.called).to.be.true;
    });
    it('should call find with a query', () => {
        const Hero = {
            find: () => { }
        };

        const req = {
            query: {
                id: 'my id'
            }
        };

        const res = {};

        const findSpy = sinon.spy(Hero, 'find');

        controller(Hero).get(req, res);

        expect(findSpy.called).to.be.true;
    })
})



