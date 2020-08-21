require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';

const app = require('../app.js');

const Hero = mongoose.model('Hero');
const agent = request.agent(app);

describe('Hero Crud Test', () => {
	it('should allow a hero to be posted and return read and _it', (done) => {
		const heroPost = { id: '13', name: 'Bombasto' };

		agent
			.post('/api/heroes')
			.send(heroPost)
			.expect(200)
			.end((err, results) => {
				results.body.should.have.property('_id');
				done();
			});
	});

	afterEach((done) => {
		Hero.deleteMany({}).exec();
		done();
	});

	after((done) => {
		mongoose.connection.close();
		app.server.close(done());
	});
});
