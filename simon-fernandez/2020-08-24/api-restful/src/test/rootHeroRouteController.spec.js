const should = require('should');
const { expect } = require('chai');
const sinon = require('sinon');

const rootHeroRouteController = require('../controllers/rootHeroRouteController');

describe('Root Hero Route Controller', () => {
	describe('Should POST', () => {
		let Heroes = null;
		let req = null;
		let res = null;
		let controller;

		beforeEach(() => {
			Heroes = function heroConstructor() {
				this.save = () => {};
			};

			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};
			controller = rootHeroRouteController(Heroes);
		});
		it('should  respond status 400 when the name is mising', () => {
			req = {
				body: {}
			};
			controller.post(req, res);

			res.status.calledWith(400).should.equal(true);
			res.send
				.calledWith('Name is required')
				.should.equal(true, 'Message is not correct');
		});
		it('should  respond status 200 when the name exists', () => {
			req = {
				body: { name: 'Bombasto' }
			};

			controller.post(req, res);

			res.status.calledWith(201).should.equal(true, 'Message is not correct');
			res.send
				.calledWith('Created')
				.should.equal(true, 'Message is not correct');
		});
	});
	describe('Should GET', () => {
		let Heroes = null;
		let req = null;
		let res = null;
		let controller;

		beforeEach(() => {
			Heroes = {
				find: () => {}
			};

			res = {};
			controller = rootHeroRouteController(Heroes);
		});
		it('should call find without query', () => {
			const req = {};

			const findSpy = sinon.spy(Heroes, 'find');

			controller.get(req, res);
			expect(findSpy.called).to.be.true;
		});
		it('should call find with a query', () => {
			const req = {
				query: {
					id: 'myId'
				}
			};
			const findSpy = sinon.spy(Heroes, 'find');
			controller.get(req, res);

			expect(findSpy.called).to.be.true;
		});
	});
});
