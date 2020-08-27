const  { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteControler');


// en el caso del fake nosotros podemos simular comportamientos
describe('Heroes Controller', () => {
      it('should call find with a query', () => {
        const Hero = {
            find: () => {}
        };

        const req = {
            query: {
                id: 'myId'
            }
        };

        const res = {};

        const findFake = sinon.spy(Hero, 'find');

        controller(Hero).get(req, res);

        expect(findFake.called).to.be.true;
    })
})