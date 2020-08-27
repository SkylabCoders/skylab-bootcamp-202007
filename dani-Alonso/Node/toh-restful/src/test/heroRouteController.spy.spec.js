const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/hero/heroRouteController');

describe('Hero controller', () => {
	beforeEach(() => {
		sinon.restore();
	});
	describe('GET', () => {
		it('should call a json with a hero', () => {
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

			const statusSpy = sinon.spy(res, 'status');
			controller.get(req, res);

			expect(statusSpy.calledWith(200)).to.be.true;
		});
	});
});
