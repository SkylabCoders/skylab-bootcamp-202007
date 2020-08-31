const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controller/heroRouterController');

describe('hero router controller', () => {

    afterEach(() => {
        sinon.restore();
    })

    it('Should get a hero', () => {

        const req = {
            hero: {
                id: 1,
                name: "Bombasto"
            }
        }

        const res = {
            json: () => { },
            status: () => { }
        }

        const spyJson = sinon.spy(res, 'json');
        const spyStatus = sinon.spy(res, 'status');

        controller.get(req, res);

        expect(spyJson.called).to.be.true;
        expect(spyStatus.calledWith(200));

    })

    it('Should get status 400 when there isnt a hero', () => {

        const req = {

        }

        const res = {
            json: () => { },
            status: () => { }
        }

        const spyJson = sinon.spy(res, 'json');
        const spyStatus = sinon.spy(res, 'status');

        controller.get(req, res);

        expect(spyJson.notCalled).to.be.true;
        expect(spyStatus.calledWith(400));

    })

    it('Should update a hero', () => {

       /*  const Hero = function heroConstructor() {
            this.save = () => {};
        } */

        const req = {
            body:  {
                    name: "Bombasto",
                },
                hero: {
                    id: 1,
                    save: (callback)=>{callback()}
                }
        }

        const res = {
            json: () => { },
            status: () => { },
            send: () => { }
        }

        const statusSpy = sinon.spy(res,'status');

        controller.put(req, res);

        expect(statusSpy.calledWith(204)).to.be.true;

    })

    it('Should delete a hero', () => {
 
         const req = {
                 hero: {
                     id: 1,
                     remove: (callback)=>{callback()}
                 }
         }
 
         const res = {
             status: () => { },
             send: () => { }
         }
 
         const statusSpy = sinon.spy(res,'status');
 
         controller.deleter(req, res);
 
         expect(statusSpy.calledWith(204)).to.be.true;
 
     })

     it('Should update a hero by object id', () => {
 
        const req = {
                hero: {
                    id: 1,
                    save: (callback)=>{callback()}
                },
                Object: {
                    entries: {},
                    forEach: (callback)=>{callback()}
                },
                body:{
                    _id: '5f44d640cad6e30bc3790171'
                }
        }

        const res = {
            status: () => { },
            send: () => { },
            json: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.patch(req, res);

        expect(statusSpy.calledWith(204)).to.be.true;

    })

/*     it('Should not update a hero by object id', () => {
 
        const req = {
                hero: {
                    id: 1,
                    save: (callback)=>{callback()}
                },
                Object: {
                    entries: {},
                    forEach: (callback)=>{callback()}
                },
                body:{

                }
        }

        const res = {
            status: () => { },
            send: () => { },
            json: ()=>{}
        }

        const statusSpy = sinon.spy(res,'status');

        controller.patch(req, res);

        expect(statusSpy.calledWith(404)).to.be.true;

    }) */



    
})