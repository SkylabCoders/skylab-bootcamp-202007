const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');
const { spy } = require('sinon');


describe('Heroes controlller', () => {
    afterEach(() => {
        sinon.restore();
    })
    it('Should call status only once', () => {

        function Hero(body) {

            this.save = () => { }

        };
        const req =
        {
            body: {
                name: 'name'
            }
        };
        const res = {
            status: () => { },
            json: () => { },
            send: () => { }
        };
        const statusFaker = sinon.fake();
        const jsonFaker = sinon.fake();

        sinon.replace(res, 'status', statusFaker)
        sinon.replace(res, 'json', jsonFaker)
        controller(Hero).post(req, res)

        expect(statusFaker.callCount).to.equal(1);
        expect(jsonFaker.callCount).to.equal(1);

    });
});