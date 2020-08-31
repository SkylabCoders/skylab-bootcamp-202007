const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('Hero controller', () => {

    it('should call json, GET', () => {
        const req = {
            hero: {}
        };

        const res = {
            json: () => { },
            send: () => { }
        }

        const hero = {};

        const jsonSpy = sinon.spy(res, 'json');
        const sendSpy = sinon.spy(res, 'send');

        controller.get(req, res);

        expect(jsonSpy.called).to.be.true;
        expect(sendSpy.called).to.be.false;
    });

    it('should not PUT', () => {  /// what the fuck did I do here?
        const req = {
            body: {
                name: 'my hero',

            },
            hero: {
                save: () => { }
            }
        }

        const res = {
            json: () => { },
            send: () => { }
        }

        controller.put(req, res);

        const jsonSpy = sinon.spy(res, 'json');
        const sendSpy = sinon.spy(res, 'send');
        const saveSpy = sinon.spy(req.hero, 'save')

        expect(jsonSpy.called).to.be.false;
        expect(sendSpy.called).to.be.false;
        expect(saveSpy.called).to.be.false;



    })

    it('should DELETEr', () => {
        const req = {
            hero: {
                remove: () => { }
            }
        }

        const res = {
            send: () => { },
            sendStatus: () => { }
        }

        const removeSpy = sinon.spy(req.hero, 'remove');
        const sendSpy = sinon.spy(res, 'send');
        const sendStatusSpy = sinon.spy(res, 'sendStatus');

        expect(sendSpy.called).to.be.false;

    })

});