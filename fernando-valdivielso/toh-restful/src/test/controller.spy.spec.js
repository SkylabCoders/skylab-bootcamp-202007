const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');

describe('Heroes controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should respond with status 201', () => {
		const Hero = function heroConstructor() {
			this.save = () => {};
		};

		const req = {
			body: {
				name: 'Bombasto'
			}
		};
		const res = {
			status: () => {}, // add code as argument??
			json: () => {}
		};

		const statusSpy = sinon.spy(res, 'status'); // res - objeto donde esta el espia, 'status' - que metodo espiar
		// const jsonSpy = sinon.spy(res, 'json'); ????

		controller(Hero).post(req, res);

		// assertio that status 201 has been called
		expect(statusSpy.calledWith(201)).to.be.true;

		// expect(jsonSpy.called).to.be.true; ????
	});

	it('should respond with status 400', () => {
		const Hero = function () {
			this.save = () => {};
		};

		const req = {
			body: {}
		};

		const res = {
			status: (code) => {},
			json: () => {},
			send: () => {}
		};

		const statusSpy = sinon.spy(res, 'status');

		controller(Hero).post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});

	it('should call find  without query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {};

		const res = {};

		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
	});
	it('should call find with a query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {
			query: {
				id: 'my id'
			}
		};

		const res = {};

		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
	});
});
