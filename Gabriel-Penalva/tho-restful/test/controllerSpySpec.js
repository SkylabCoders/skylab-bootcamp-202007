const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');
const { spy } = require('sinon');


describe('Heroes controlller', () => {
    afterEach(() => {
        sinon.restore();
    })
    it('Should respond with status 201 when datas ok', () => {

        function Hero(body) {

            this.save = () => { }

        };
        const req =
        {
            body:
                { name: 'Bombasto' }
        };
        const res = {
            status: () => { },
            json: () => { },
            send: () => { }
        };
        const statusSpy = sinon.spy(res, 'status');
        const jsonSply = sinon.spy(res, 'json');
        controller(Hero).post(req, res)

        expect(statusSpy.calledWith(201)).to.be.true;
        expect(jsonSply.calledOnce).to.be.true;

    });
    it('Should respond with status 400 when datas ok', () => {

        function Hero(body) {

            this.save = () => { }

        };
        const req =
        {
            body: ''
        };
        const res = {
            status: () => { },
            json: () => { },
            send: () => { }
        };
        const statusSpy = sinon.spy(res, 'status');
        controller(Hero).post(req, res)


        expect(statusSpy.calledWith(400)).to.be.true;
    });

    it('should call find with a empty query', () => {

        const Hero = {
            find: () => { }
        };
        const req = {};
        const res = {};
        const findSpy = sinon.spy(Hero, 'find');
        controller(Hero).get(req, res)


        expect(findSpy.calledWith({})).to.be.true;
    })
    it('should call find with a id query', () => {

        const Hero = {
            find: () => { }
        };
        const req = {
            query: {
                id: 5
            }
        };
        const res = {};
        const findSpy = sinon.spy(Hero, 'find');
        controller(Hero).get(req, res)


        expect(findSpy.calledWith({ id: 5 })).to.be.true;
    })
    it('should call find with a id query', () => {

        const Hero = {
            find: () => { }
        };
        const req = {
            query: {
                name: "ff"
            }
        };
        const res = {};
        const findSpy = sinon.spy(Hero, 'find');
        controller(Hero).get(req, res)


        expect(findSpy.calledWith({ name: "ff" })).to.be.true;
    })
    it('should call find with a id query', () => {

        const Hero = {
            find: (quer, fn) => {
                fn();

                expect(quer).to.deep.equal({
                    id: 6
                })
            }
        };
        const req = {
            query: {
                id: 6
            }
        };
        const res = {
            json: () => { }
        };
        const jsonSpy = sinon.spy(res, 'json');
        controller(Hero).get(req, res);



        expect(jsonSpy.called).to.be.true;
    })

});