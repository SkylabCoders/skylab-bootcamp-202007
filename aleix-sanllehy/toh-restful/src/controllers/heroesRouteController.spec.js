// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroesController = require('./heroesRouteController');

// describe -> test suite
describe('Heroes Controller', () => {
	describe('POST', () => {
		let Hero = {};
		let res = {};
		let req = {};

		beforeEach(() => {
			Hero = function heroConstructor() {
				this.save = () => {};
			};
			req = {
				body: {}
			};

			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero);

			controller.post(req, res);
		});

		it('should respond status 400 when name is missing', () => {
			// assert post is undefined

			/**
			 * req ? object
			 * properties? body
			 * anytihing of in body? name. i'm testing post without name
			 */

			req = {
				body: {}
			};

			res.status
				.calledWith(400)
				.should.equal(
					true,
					'Bad status. Name is not required in this scenario'
				);

			res.send
				.calledWith('Name is required!')
				.should.equal(true, 'Message is not correct');
		});

		it('should respond status 201 when name exists', () => {
			req = {
				body: { name: 'Bombasto' }
			};

			res.status.calledWith(201).should.equal(true);
		});

		it('should get an error whenever something goes wrong', () => {
			const err = 'err';
			Hero = {
				save: (callback) => {
					callback(err);
				}
			};

			res.send.calledWith(err);
		});
	});

	describe('GET', () => {
		let Hero = {};
		let res = {};
		let req = {};

		beforeEach(() => {
			Hero = function heroConstructor() {
				this.find = () => {};
			};
			req = {
				body: {}
			};

			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero);

			controller.post(req, res);
		});

		it('should ', () => {
			req = { body: {}, query: 1 };
			res.status.calledWith(201).should.equal(true);
		});

		/* it('', () => {});
		it('', () => {}); */
	});
});
