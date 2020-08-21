// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroController = require('../controllers/heroesController');

describe('Hero Controller Tests:', () => {
	describe('Post', () => {
		it('should not allow an empty name on post', () => {
			// eslint-disable-next-line no-unused-vars
			const Hero = function testHero(hero) {
				this.save = () => {};
			};

			const req = {
				body: {
					name: 'Bombasto'
				}
			};

			const res = {
				status: sinon.spy(),
				send: sinon.spy(),
				json: sinon.spy()
			};

			const controller = heroController(Hero);
			controller.post(req, res);

			res.status
				.calledWith(400)
				.should.equal(true, `Bad Status ${res.status.args[0][0]}`);
			res.send.calledWith('Name is required').should.equal(true);
		});
	});
});
