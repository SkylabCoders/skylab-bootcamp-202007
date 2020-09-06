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
        const statusStub = sinon.stub(res, 'status');
        const jsonStub = sinon.stub(res, 'json');
        controller(Hero).post(req, res)

        expect(statusStub.callCount).to.equal(1);
        expect(jsonStub.callCount).to.equal(1);

    });
    it('Should respond with status 400 when datas ok', () => {
    });

    it('should call find with a empty query', () => {
    })
    it('should call find with a id query', () => {

    })
    it('should call find with a id query', () => {

    })

});