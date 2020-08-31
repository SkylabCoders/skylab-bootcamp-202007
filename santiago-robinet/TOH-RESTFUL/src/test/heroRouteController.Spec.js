const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../../controllers/heroRoutesController');

describe('Hero Controller', () => {
	it('GET METHOD should call send only once', () => {
		const req = {
			hero: {}
		};

		const res = {
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');

		controller.get(req, res);
 
		expect(sendSpy.calledWith(req.hero)).to.be.true;
	});

	it('DELETE METHOD should call remove function once', () => {
		const req = {
			hero: {
				remove: () => {}
			}
		};

		const res = {};

		const { hero } = req;

		const removeSpy = sinon.spy(req.hero, 'remove');

		controller.deleter(req, res);

		expect(removeSpy.called).to.be.true;
	});

	it('DELETE METHOD 2 should show an error when hero can`t be removed', () => {

		const req = {
			hero: {
				remove: () => {}
			}
		}

		const res = {
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');
		const removeFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'remove', removeFake);

		controller.deleter(req, res);

		expect(sendSpy.called).to.be.true;
		
	});

	it('DELETE METHOD 3 should show an error when hero can`t be removed', () => {

		const req = {
			hero: {
				remove: () => {}
			}
		}

		const res = {
			sendStatus: () => {}
		};

		const sendStatusSpy = sinon.spy(res, 'sendStatus');
		const removeFake = sinon.fake.yields(null);
		sinon.replace(req.hero, 'remove', removeFake);

		controller.deleter(req, res);

		expect(sendStatusSpy.called).to.be.true;
		
	})

	it('PUT METHOD should call save when hero exist', () => {
		const res = {};

		const req = {
			body: {
                _id: '5425f21352g22d',
				name: 'Bombasto'
			},
			hero: {
				save: () => {}
			}
		};

		const { hero } = req;

		const saveSpy = sinon.spy(req.hero, 'save');

		controller.put(req, res);

		expect(saveSpy.called).to.be.true;
	});

	it('PUT FAKE 1 shoul send an error if save doesn`t work', () => {
		
		const req = {
			body:{
				name: 'Gerard'
			},
			hero: {
				save:() => {}
			}
		}

		const res = {
			json: () => {}
		};

		const jsonSpy = sinon.spy(res, 'json');
		const saveFake = sinon.fake.yields(null)
		sinon.replace(req.hero, 'save', saveFake);


		controller.put(req, res);

		expect(jsonSpy.called).to.be.true;

	});

	it('PUT FAKE 2 shoul send an error if save doesn`t work', () => {
		
		const req = {
			body:{
				name: 'Error'
			},
			hero: {
				save:(error) => {}
			}
		}

		const res = {
			send: () => {}
		};

		const sendSpy = sinon.spy(res, 'send');
		const saveFake = sinon.fake.yields(true)
		sinon.replace(req.hero, 'save', saveFake);


		controller.put(req, res);

		expect(sendSpy.called).to.be.true;

	})



	it('PUT METHOD should not call save when hero doesnt exist', () => {
		const res = {};

		const req = {
            body: {
                _id: '5425f21352g22d',
				name: 'Bombasto'
            },
			save: () => {}
		};

		const { hero } = req;

		const saveSpy = sinon.spy(req, 'save');

		controller.put(req, res);

		expect(saveSpy.notCalled).to.be.true;
	});

	it('PATCH METHOD should  ', () => {
		const req = {
			body: {
				name: 'Bombasto'
			},
			hero: {
				save: () => {}
			}
		};
		const res = {};

		const { hero } = req;

		const saveSpy = sinon.spy(req.hero, 'save');

		controller.patch(req, res);

		expect(saveSpy.called).to.be.true;
	});

	
	it('PATCH METHOD 2 should  ', () => {
		const req = {
			body: {
				name: 'Bombasto'
			},
			hero: {
				save: () => {}
			}
		};
		const res = {
			send: () => {}
		};
		const sendSpy = sinon.spy(res, 'send');
		const saveFake = sinon.fake.yields(true);
		sinon.replace(req.hero, 'save', saveFake);

		controller.patch(req, res);

		expect(sendSpy.called).to.be.true;
	});

	it('PATCH METHOD 3 should  ', () => {
		const req = {
			body: {
				name: 'Bombasto'
			},
			hero: {
				save: () => {}
			}
		};
		const res = {
			json: () => {}
		};
		const jsonSpy = sinon.spy(res, 'json');
		const saveFake = sinon.fake.yields(null);
		sinon.replace(req.hero, 'save', saveFake);

		controller.patch(req, res);

		expect(jsonSpy.called).to.be.true;
	});

	

});
