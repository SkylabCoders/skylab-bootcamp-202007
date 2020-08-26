const sinon = require('sinon');
const { expect } = require('chai');

const heroesController = require('../controllers/heroesRouteController');

describe.skip('Heroes Controller', () => {
	describe('POST', () => {
		let req = null;
		let res = null;
		let controller = null;
		let Hero = null;
		let statusSpy = null;
		let jsonSpy = null;
		let sendSpy = null;
		beforeEach(() => {
			// Preparació de l'escenari
			Hero = function heroConstructor() {
				this.save = () => {};
			};

			req = {
				body: {}
			};

			res = {
				status: () => {},
				json: () => {},
				send: () => {}
			};

			statusSpy = sinon.spy(res, 'status');
			jsonSpy = sinon.spy(res, 'json');
			sendSpy = sinon.spy(res, 'send');

			controller = heroesController(Hero);
		});

		it('should respond 400 when name is missing', () => {
			controller.post(req, res);
			statusSpy.calledWith(400).should.equal(true, 'Name is required');
			sendSpy
				.calledWith('Name is required')
				.should.equal(true, 'Message is not correct');
		});

		it('should respond 201 when req.body has a name', () => {
			req.body.name = 'EstherVanesaSanti';
			controller.post(req, res);
			statusSpy.calledWith(201).should.equal(true);
		});
	});

	describe('GET', () => {
		let req = null;
		let res = null;
		let controller = null;
		let findSpy = null;
		let Hero = null;

		beforeEach(() => {
			Hero = {
				find: () => {}
			};

			req = {
				query: {
					id: {}
				}
			};

			res = {};

			findSpy = sinon.spy(Hero, 'find');

			controller = heroesController(Hero);
		});

		afterEach(() => {
			sinon.restore();
		});

		it('should call find without a query a req', () => {
			req = null;
			controller.get(req, res);
			expect(findSpy.called).to.be.true;
		});

		it('should call find without a query a req query', () => {
			req.query = null;
			controller.get(req, res);
			expect(findSpy.called).to.be.true;
		});

		it('should call find without a query id', () => {
			controller.get(req, res);
			expect(findSpy.called).to.be.true;
		});

		it('should call find with a query ', () => {
			req.query.id = 13;
			controller.get(req, res);
			expect(findSpy.called).to.be.true;
		});
	});
});
