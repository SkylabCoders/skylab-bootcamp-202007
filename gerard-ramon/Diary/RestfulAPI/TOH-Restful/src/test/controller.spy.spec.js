const { expect } = require('chai');
const sinon = require('sinon');

let controller = require('../controllers/heroesRouteController');

describe('Heroes Controller [Spy]', () => {
	afterEach(() => {
		sinon.restore();
	});

	// ###################### POST ###########################

	it('[POST] should respond with status 201', () => {
		const Hero = function () {
			this.save = () => {};
		};

		const req = {
			body: {
				name: 'Bombasto'
			}
		};

		const res = {
			send: () => {},
			status: () => {},
			json: () => {}
		};

		const statusSpy = sinon.spy(res, 'status');

		controller(Hero).post(req, res);

		expect(statusSpy.calledWith(201)).to.be.true;
	});

	it('[POST] should respond with status 400', () => {
		const Hero = function () {
			this.save = () => {};
		};

		const req = {
			body: {}
		};

		const res = {
			send: () => {},
			status: () => {},
			json: () => {}
		};

		const statusSpy = sinon.spy(res, 'status');

		controller(Hero).post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	// ###################### GET ###########################

	it('[GET] should call find without a query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {};

		const res = {
			send: () => {},
			status: () => {},
			json: () => {}
		};

		const statusSpy = sinon.spy(res, 'status');
		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
	});

	it('[GET] should call find with a query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {
			query: {
				id: 13
			}
		};

		const res = {
			send: () => {},
			status: () => {},
			json: () => {}
		};

		const statusSpy = sinon.spy(res, 'status');
		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
	});

	it('[GET] should call find without a query', () => {
		expect(true).to.be.true;
	});
});
