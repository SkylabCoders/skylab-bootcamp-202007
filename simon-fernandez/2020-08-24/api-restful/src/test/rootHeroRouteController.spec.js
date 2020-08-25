const should = require('should'); //no se usa?
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
			Heroes = function heroConstructor() {
				this.find = () => {};
			};

			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};
			controller = rootHeroRouteController(Heroes);
		});
		xit('should response status 302 when it list a heroes', () => {
			req = {
				body: {},
				query: { id: 1 }
			};
			const hero = [
				{
					powerstats: {
						intelligence: 38,
						strength: 100,
						speed: 17,
						durability: 80,
						power: 24,
						combat: 64
					},
					appearance: {
						height: ["6'8", '203 cm'],
						weight: ['980 lb', '441 kg'],
						gender: 'Male',
						race: 'Human',
						eyeColor: 'Yellow',
						hairColor: 'No Hair'
					},
					biography: {
						aliases: ['Rick Jones'],
						fullName: 'Richard Milhouse Jones',
						alterEgos: 'No alter egos found.',
						placeOfBirth: 'Scarsdale, Arizona',
						firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
						publisher: 'Marvel Comics',
						alignment: 'good'
					},
					work: {
						occupation: 'Musician, adventurer, author; formerly talk show host',
						base: '-'
					},
					connections: {
						groupAffiliation:
							'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
						relatives:
							'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
					},
					images: {
						xs:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
						sm:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
						md:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
						lg:
							'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
					},
					_id: '5f43fc6ff448dc1ff8a28354',
					id: 1,
					name: 'A-Bomb',
					slug: '1-a-bomb'
				}
			];
			controller = rootHeroRouteController(Heroes);
			controller.get(req, res);

			res.status.calledWith(302).should.equal(true, 'Message is not correct');
			res.json.calledWith(hero).should.equal(true, 'Message2 is not correct');
		});
		xit('should response status 200 when it list a heroes', () => {
			req = {
				query: {}
			};

			controller = rootHeroRouteController(Heroes);
			controller.get(req, res);

			res.status.calledWith(200).should.equal(true, 'Message is not correct');
		});
	});
});
