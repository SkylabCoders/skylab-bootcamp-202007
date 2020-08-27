const should = require('should');
const sinon = require('sinon');
const heroesControler = require('../controler/heroesRouteControler');

describe('HeroesRouteControler', () => {
	describe('POST', () => {
		it('should  respond status 400 when name is missing', () => {
			const Hero = function heroConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const controler = heroesControler(Hero);
			controler.post(req, res);

			res.status
				.calledWith(400)
				.should.equal(
					true,
					'Badd status, name not is required in this scenario'
				);

			res.send
				.calledWith('name is required')
				.should.equal(true, 'Message is not correct');
		});
		it('should  respond status 201 when name is the body', () => {
			const Hero = function heroConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {
					name: 'Bombasto'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const controler = heroesControler(Hero);
			controler.post(req, res);

			res.status.calledWith(201).should.equal(true, 'Name is required');
		});
	});
	describe('GET', () => {
		it(`should return the hero list if put id in the req query`, () => {
			const req = {
				query: {
					id: '13'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const Hero = {
				find: (query, callback) => {
					callback();
				}
			};

			const controler = heroesControler(Hero);
			controler.get(req, res);

			res.status.calledWith(200).should.equal(true);
		});
		it(`should return error when we calll the hero list`, () => {
			const req = {
				query: {
					id: '13'
				}
			};

			const res = {
				send: sinon.spy(),
				json: sinon.spy(),
				status: sinon.spy()
			};

			const err = 'err';
			const Hero = {
				find: (query, callback) => {
					callback(err);
				}
			};

			const controler = heroesControler(Hero);
			controler.get(req, res);

			res.send.calledWith(err).should.equal(true);
		});
	});
});
