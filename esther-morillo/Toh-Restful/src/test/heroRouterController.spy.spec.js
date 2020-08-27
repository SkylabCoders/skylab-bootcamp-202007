const  { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroRouteController');

describe('Hero Controller', () => {
    beforeEach(() => {
        sinon.restore();
    });
    
    describe('GET', () => {   
        it('should call json with a hero', () => {
            const req = {
                hero: 'Bombasto'
            };
    
            const res = {
                json: () => {},
                status: () => {}
            };    
            
            const jsonSpy = sinon.spy(res, 'json');
            controller.get(req, res);
            expect(jsonSpy.callCount).to.equal(1);          
        });

        it('should called with status 200', () => {
            const req = {
                hero: 'Bombasto'
            };
    
            const res = {
                json: () => {},
                status: () => {}
            };    
            
            const statusSpy = sinon.spy(res, 'status')
            controller.get(req, res);
            expect(statusSpy.calledWith(200)).to.be.true;
        });

        it('should called with status 404', () => {
            const req = {};
    
            const res = {
                json: () => {},
                status: () => {}
            };    
            
            const statusSpy = sinon.spy(res, 'status')
            controller.get(req, res);
            expect(statusSpy.calledWith(404)).to.be.true;
        });
    });


    describe('PUT', () => {

        it('should called json with a hero', () => {
            const req = {
                body: {
                    name: 'Bombasto'                    
                },
                hero: {                   
                    save: (callback) => {callback()}
                }
            };
    
            const res = {
                status: () => {},
                json: () => {}
            };

            const jsonSpy = sinon.spy(res, 'json');
            controller.put(req, res);
            expect(jsonSpy.callCount).to.equal(1);
        });

        it('should call status with a 201', () => {
            const req = {
                body: {
                    name: 'Bombastooo'
                },
                hero: {
                    save: (callback) => {
                        callback();
                    }
                }
            };
            const res = {
                json: () => {},
                status: () => {}
            };
            const statusSpy = sinon.spy(res, 'status');
            controller.put(req, res);
            expect(statusSpy.calledWith(201)).to.be.true;
        });

        xit('should called with status 404', () => {
            const req = {
                body: {
                    name: 'Bombasto'                    
                },
                hero: {                   
                    save: (callback) => {callback()}
                }
            };
    
            const res = {
                status: () => {},
                send: () => {}
            };

            const statusSpy = sinon.spy(res, 'status');
            controller.put(req, res);
            expect(statusSpy.calledWith(404)).to.be.true;
        });
    });

    describe('DELETE', () => {
        it('should called with status 204', () => {
            const req = {
                hero: {
                    remove: (callback) => {callback()}
                }
            }
    
            const res = {
                sendStatus: () => {}
            }
    
            const sendStatusSpy = sinon.spy(res, 'sendStatus');
            controller.deleter(req, res);
            expect(sendStatusSpy.calledWith(204)).to.be.true;

        });
    });

    xit('should called with status 404', () => {
        const req = {
            hero: {
                remove: (callback) => {callback()}
            }
        }

        const res = {
            status: () => {},
            sendStatus: () => {}
        }

        const statusSpy = sinon.spy(res, 'status');
        controller.deleter(req, res);
        expect(statusSpy.calledWith(404)).to.be.true;
    });


    describe('PATCH', () => {

        it('should called json with a hero', () => {
            const req = {
                body: {
                    _id: '13',
                    name: 'Bombasto'                    
                },
                hero: {                   
                    save: (callback) => {callback()}
                }
            };
    
            const res = {
                status: () => {},
                json: () => {}
            };

            const jsonSpy = sinon.spy(res, 'json');
            controller.put(req, res);
            expect(jsonSpy.callCount).to.equal(1);
        });

        /* it('should call status with a 201', () => {
            const req = {
                body: {
                    name: 'Bombastooo'
                },
                hero: {
                    save: (callback) => {
                        callback();
                    }
                }
            };
            const res = {
                json: () => {},
                status: () => {}
            };
            const statusSpy = sinon.spy(res, 'status');
            controller.put(req, res);
            expect(statusSpy.calledWith(201)).to.be.true;
        }); */

       
    })
})






// 200 get, que puede acceder
// 404 no lo encuentra
// 201 del post, que crea -  también el put
// 204 el ok del delete