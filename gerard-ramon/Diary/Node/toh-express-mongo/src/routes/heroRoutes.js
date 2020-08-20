const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const MONGODB = require('../../public/Persitance/mongoConst');

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
		.post((req, res) => {
			let client = null;
			const { hero } = req.body;
			(async function query() {
				try {
					client = await MongoClient.connect(MONGODB.url);
					debug('Connection established...');

					const db = client.db(MONGODB.dbName);

					const collection = db.collection(MONGODB.heroesCollection);

					await collection.deleteOne({ _id: new ObjectID(hero) });
					const heroes = await collection.find().toArray();

					client.close();
					res.render('heroes', {
						nav,
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(MONGODB.url);
					debug('Connection established...');

					const db = client.db(MONGODB.dbName);

					const collection = db.collection(MONGODB.heroesCollection);

					const heroes = await collection.find().toArray();

					client.close();
					res.render('heroes', {
						nav,
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	heroRoutes.route('/addHero').post((req, res) => {
		(async function mongo() {
			try {
				let { addHero } = req.body;
				[addHero] = addHero;
				const client = await MongoClient.connect(MONGODB.url);
				const db = client.db(MONGODB.dbName);
				const collection = db.collection(MONGODB.heroesCollection);

				const lastHero = await collection
					.find()
					.sort({ id: -1 })
					.limit(1)
					.toArray();

				const { id } = lastHero[0];

				await collection.insertOne({ id: id + 1, name: addHero }, (error) => {
					if (error) {
						throw error;
					}
					res.redirect('/heroes');
				});

				client.close();
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const id = req.params.heroId;

			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(MONGODB.url);
					const db = await client.db(MONGODB.dbName);

					const collection = await db.collection(MONGODB.heroesCollection);

					const hero = await collection.findOne({ _id: new ObjectID(id) });
					res.hero = hero;
					client.close();
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };

			(async function mongo() {
				try {
					const client = await MongoClient.connect(MONGODB.url);
					const db = await client.db(MONGODB.dbName);
					const collection = db.collection(MONGODB.heroesCollection);

					await collection.updateOne(filter, updateQuery, (error) => {
						if (error) {
							throw error;
						}
						res.redirect('/heroes');
					});

					client.close();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			res.render('hero-detail', { nav, hero: res.hero });
		});

	return heroRoutes;
}

module.exports = router;
