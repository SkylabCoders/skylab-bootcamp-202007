const sinon = require('sinon');
const { expect } = require('chai');

const heroController = require('../controllers/heroRouteController');

describe('Hero Controller', () => {
	it('[GET] Should call json whith a req.hero ', () => {
		let req = {
			hero: 'bombasto'
		};

		let res = {
			json: () => {}
		};

		let jsonSpy = sinon.spy(res, 'json');

		heroController.get(req, res);

		expect(jsonSpy.called).to.be.true;
	});

	it('[GET] Should call send with an error with no req.hero ', () => {
		let req = {
			hero: null
		};

		let res = {
			json: () => {},
			send: () => {}
		};

		let jsonSpy = sinon.spy(res, 'json');
		let sendSpy = sinon.spy(res, 'send');

		heroController.get(req, res);

		expect(jsonSpy.called).to.be.false;
		expect(sendSpy.calledWith('Bad parameters')).to.be.true;
	});
});
