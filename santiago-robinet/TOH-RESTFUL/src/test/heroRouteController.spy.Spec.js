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

	it('PATCH METHOD should ', () => {
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
});
