const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/hero/heroesRouteController');

describe('Heroes controller', () => {
	it('sould respond with status 201,', () => {
		const Hero = function () {
			this.save = () => {};
		};
		const req = {
			body: {
				name: 'Bombasto'
			}
		};
		const res = {
			status: () => {},
			json: () => {},
			send: () => {}
		};
		const statusSpy = sinon.spy(res, 'status');
		controller(Hero).post(req, res);

		// assertion es que el status 201
		expect(statusSpy.calledWith(201)).to.be.true;
	});
});
