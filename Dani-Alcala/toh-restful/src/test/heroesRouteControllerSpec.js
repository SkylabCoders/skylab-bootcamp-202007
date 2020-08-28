// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller v1', () => {
	/* se puede hacer un beforeEach usando el this */
	afterEach(() => {
		sinon.restore();
	});
	describe('POST', () => {
		it('should respond status 400 when name is missing', () => {
			const Hero = function heroConstructor() {
				this.save = () => {}; /* mocqueo save pq me da igual lo que lleve */
			};

			const req = {
				body: {}
			};
			const res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero); /* esta es la segunda parte */
			controller.post(req, res);

			/* ahora vienen las assertions */
			/* this.res.status.calledWith(400).should.equal(false) - haría esto primero para q fallen los tests */
			res.status
				.calledWith(400)
				.should.equal(true, 'message is the one i put here');
			res.send
				.calledWith('Name is required')
				.should.equal(true, 'another message to distinguish where is failing');
		});

		it('should respond status 201 when hero is created ok', () => {
			const Hero = function heroConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {
					name: 'Messi'
				}
			};

			const res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero);
			controller.post(req, res);

			res.status.calledWith(201).should.equal(true);
		});
	});
	describe('GET, first part', () => {
		it('should return a hero', () => {
			const Hero = { id: 14, find: () => {} };

			const req = {
				query: {
					id: '14'
				}
			};
			const res = {
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero);
			controller.get(req, res);

			res.should.have.property('json');
		});
	});
	describe('GET, find, with error true', () => {
		it('we test the callback inside of find', () => {
			const Hero = { id: 14, find: () => {} };

			const req = {
				query: {
					id: '14'
				}
			};
			const res = {
				json: sinon.spy(),
				send: sinon.spy()
			};

			const findFake = sinon.fake.yields(true, { id: 2 });
			sinon.replace(Hero, 'find', findFake);

			const controller = heroesController(Hero);
			controller.get(req, res);

			res.send.called.should.equal(true);
		});
	});
	describe('GET, find, with error false', () => {
		it('we test the callback inside of find', () => {
			const Hero = { id: 14, find: () => {} };

			const req = {
				query: {
					id: '14'
				}
			};
			const res = {
				json: sinon.spy(),
				send: sinon.spy()
			};

			const findFake = sinon.fake.yields(false, { id: 2 });
			sinon.replace(Hero, 'find', findFake);

			const controller = heroesController(Hero);
			controller.get(req, res);

			res.json.called.should.equal(true);
		});
	});
});
