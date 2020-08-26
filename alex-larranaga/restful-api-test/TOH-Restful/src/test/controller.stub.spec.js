const { expect } = require('chai'); // runner
const sinon = require('sinon'); // library (for spy, mock and more shit like this

const controller = require('../controllers/heroesRouteController');

describe.skip('Heroes Controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('STUB : POST METHOD: it should respons with status 201', () => {
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
			send: () => {},
			json: () => {}
		};

		controller(Hero).post(req, res);

		const statusSpy = sinon.stub(res, 'status');

		expect(statusSpy.callCount(1)).to.be.true;
	});

	it('POST METHOD: it should return a 400 if name is missing', () => {});

	it('GET METHOD: should call find with no query', () => {});

	it('GET METHOD: should call find with a query', () => {});
});
