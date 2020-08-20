const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const db = client.db(dbName);

					const collection = await db.collection('heroes');

					const heroes = await collection.find().toArray();

					res.render('heroes', {
						nav,
						title: 'My Heros',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.post((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const { deleteHero, createHero } = req.body;
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const db = client.db(dbName);

					const collection = await db.collection('heroes');
					if (createHero) {
						const [{ id }] = await collection
							.find()
							.sort({ id: -1 })
							.limit(1)
							.toArray(); // for MAX

						collection.insertOne({ id: id + 1, name: createHero });
					}

					if (deleteHero === 'all') {
						await collection.deleteMany({});
					} else {
						await collection.deleteOne({
							_id: new ObjectID(deleteHero)
						});
					}
					const heroes = await collection.find().toArray();

					res.render('heroes', {
						nav,
						title: 'My Heros',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});
	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collecionName = 'heroes';

			const ID = req.params.heroId;
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);

					const collection = await db.collection(collecionName);

					const heroes = await collection.findOne({ _id: new ObjectID(ID) });
					res.heroes = heroes;
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();

			debug(ID);
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection(collectName);

					await collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/heroes');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.heroes
			});
		});

	return heroRoutes;
}

module.exports = router;
