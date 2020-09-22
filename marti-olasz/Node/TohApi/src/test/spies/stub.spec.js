const { expect } = require('chai');
const sinon = require('sinon');

const create = require('../../controllers/hero/heroCreate');

describe('Hero create', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should respond with status 201', () => {
		const Hero = function (body) {
			this.name = 'Bombasto';
			this.id = 5;
			this.save = (callback) => callback();
		};
		const req = { body: {} };
		const res = {
			json: () => {},
			sendStatus: () => {}
		};

		const statusStub = sinon.stub(res, 'sendStatus');

		create(req, res, Hero);

		expect(statusStub.callCount).to.equal(1);
	});
});
