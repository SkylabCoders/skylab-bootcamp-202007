const  { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteControler');

describe.skip('Heroes Controller', () => {
    it('should response with status 201', () => {
        // necesito un héroe, un req y un res
        const Hero = function () {
            this.save = () => {};
            
        };

        const req = {
            body: {
                name: 'Bombasto'
            }
        };

        const res = {
            status: (code) => {},
            json: () => {}
        };

        // hay que decirle en qué método está ese espía (método o función)
        const statusSpy = sinon.spy(res, 'status')

        controller(Hero).post(req, res);

        // el assetion es que ha sido llamado con 201
        // quiero saber que el espía de estatus se llamó con 201
        expect(statusSpy.calledWith(201)).to.be.true;
        // expect(true).to.be.true;
    });

    it('should response with status 400', () => {
        // necesito un héroe, un req y un res
        const Hero = function () {
            this.save = () => {};
            
        };

        const req = {
            body: {}
        };

        const res = {
            status: (code) => {},
            json: () => {},
            send: () => {},
        };

        // hay que decirle en qué método está ese espía (método o función)
        const statusSpy = sinon.spy(res, 'status')

        controller(Hero).post(req, res);

        // el assetion es que ha sido llamado con 201
        // quiero saber que el espía de estatus se llamó con 201
        expect(statusSpy.calledWith(400)).to.be.true;
        // expect(true).to.be.true;
    });


    it('should call find without query', () => {
        // expect(true).to.be.true;
        const Hero = {
            find: () => {}
        };

        const req = {};

        const res = {};

        const findSpy = sinon.spy(Hero, 'find');

        controller(Hero).get(req, res);

        expect(findSpy.called).to.be.true;
    })
    
    it('should call find with a query', () => {
        // expect(true).to.be.true;

        const Hero = {
            find: () => {}
        };

        const req = {
            query: {
                id: 'myId'
            }
        };

        const res = {};

        const findSpy = sinon.spy(Hero, 'find');

        controller(Hero).get(req, res);

        expect(findSpy.called).to.be.true;
    })
})