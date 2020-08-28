const sinon = require('sinon');
const itemMethods = require('./itemRoutesController');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

describe('Test set for itemRoutesController', ()=>{

  describe('item callbacks: READ_ONE', ()=>{
    it('Callback readOne should call res.json with one item', ()=>{
      const item = {
        name: 'testName',
        id: 3
      }
      const req = {
        item: item
      }
  
      const res = {
        status: ()=>{},
        json: function foo(something){}
      };
      
      const jsonSpy = sinon.spy(res, 'json');
  
      const methods = itemMethods();
      methods.readOne(req, res);
  
      expect(jsonSpy).to.have.been.calledWith(item);
    })
  
    it('Callback readOne should return status 200 if there is an item', ()=>{
      const item = {
        name: 'testName',
        id: 3
      }
      const req = item;
  
      const res = {
        status: function foo(code){},
        json: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');
  
      const methods = itemMethods();
      methods.readOne(req, res);
  
      expect(statusSpy).to.have.been.calledWith(200);
    })

  });

  describe('item callbacks: UPDATE_ITEM_NAME', ()=>{
    it('Callback updateItemName should call res.json with one item', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        save: (callback)=>{callback();}
      }
      const req = {
        item: item,
        body: {
          name: item.name
        }
      }
  
      const res = {
        status: ()=>{},
        json: function foo(something){}
      };
      
      const jsonSpy = sinon.spy(res, 'json');
  
      const methods = itemMethods();
      methods.updateItemName(req, res);
  
      expect(jsonSpy).to.have.been.calledWith(item);
    })
  
    it('Callback updateItemName should return status 204 if an item is updated', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        save: (callback)=>{callback();}
      }
      const req = {
        item: item,
        body: {
          name: item.name
        }
      }
  
      const res = {
        status: (code)=>{code},
        json: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');
  
      const methods = itemMethods();
      methods.updateItemName(req, res);
  
      expect(statusSpy).to.have.been.calledWith(204);
    })

    it('Callback updateItemName should append error to res.send if an error is generated', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        save: (callback)=>{callback('some error');}
      }
      const req = {
        item: item,
        body: {
          name: item.name
        }
      }
  
      const res = {
        status: ()=>{},
        json: ()=>{},
        send: (error)=>{error}
      };
      
      const sendSpy = sinon.spy(res, 'send');
  
      const methods = itemMethods();
      methods.updateItemName(req, res);
  
      expect(sendSpy).to.have.been.calledWith('some error');
    })
  });

  describe('item callbacks: UPDATE_MANY', ()=>{
    it('Callback updateMany should call res.json with one item', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        save: (callback)=>{callback();}
      }
      const req = {
        item: item,
        body: {
          name: item.name,
          _id: 'xapsdof123f'
        }
      }
  
      const res = {
        status: ()=>{},
        json: function foo(something){}
      };
      
      const jsonSpy = sinon.spy(res, 'json');
  
      const methods = itemMethods();
      methods.updateMany(req, res);
  
      expect(jsonSpy).to.have.been.calledWith(item);
    })
  
    it('Callback updateMany should return status 204 if an item is updated', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        save: (callback)=>{callback();}
      }
      const req = {
        item: item,
        body: {
          name: item.name
        }
      }
  
      const res = {
        status: (code)=>{code},
        json: ()=>{}
      };
      
      const statusSpy = sinon.spy(res, 'status');
  
      const methods = itemMethods();
      methods.updateMany(req, res);
  
      expect(statusSpy).to.have.been.calledWith(204);
    })

    it('Callback updateMany should append error to res.send if an error is generated', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        save: (callback)=>{callback('some error');}
      }
      const req = {
        item: item,
        body: {
          name: item.name
        }
      }
  
      const res = {
        status: ()=>{},
        json: ()=>{},
        send: (error)=>{error}
      };
      
      const sendSpy = sinon.spy(res, 'send');
  
      const methods = itemMethods();
      methods.updateMany(req, res);
  
      expect(sendSpy).to.have.been.calledWith('some error');
    })
  });


  describe('item callbacks: REMOVE', ()=>{
    it('Callback remove should return status 204 if an item is deleted', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        deleteOne: (callback)=>{callback();}
      }
      const req = {
        item: item
      }
  
      const res = {
        sendStatus: (code)=>{code},
      };
      
      const sendStatusSpy = sinon.spy(res, 'sendStatus');
  
      const methods = itemMethods();
      methods.remove(req, res);
  
      expect(sendStatusSpy).to.have.been.calledWith(204);
    })

    it('Callback remove should append error to res.send if an error is generated', ()=>{
      const item = {
        name: 'testName',
        id: 3,
        deleteOne: (callback)=>{callback('some error');}
      }
      const req = {
        item: item
      }
  
      const res = {
        sendStatus: ()=>{},
        send: (error)=>{error}
      };
      
      const sendSpy = sinon.spy(res, 'send');
  
      const methods = itemMethods();
      methods.remove(req, res);
  
      expect(sendSpy).to.have.been.calledWith('some error');
    })
  });


});