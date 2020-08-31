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
        const statusStub = sinon.fake(res, 'json');

        const jsonStub = sinon.fake(res, 'status');
        controller(Hero).post(req, res)

        expect(statusStub.callCount).to.equal(1);
        expect(jsonStub.callCount).to.equal(1);

    });
});