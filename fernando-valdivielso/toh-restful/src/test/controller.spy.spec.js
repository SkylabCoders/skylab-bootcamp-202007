const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');


describe('Heroes controller', () => {
    afterEach(() => {
        sinon.restore();
    })
    it('should respond with status 201', () => {


        const Hero = function () {
            this.save = () => { }
        };

        const req = {
            body: {
                name: 'Bombasto'
            }
        };
        const res = {
            status: (code) => { },
            json: () => { }
        };



        const statusSpy = sinon.spy(res, 'status'); // res - objeto donde esta el espia, 'status' - que metodo espiar

        controller(Hero).post(req, res);

        // assertio that status 201 has been called
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



