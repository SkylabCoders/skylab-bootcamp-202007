const express = require('express');
const debug = require('debug')('index:heroRoutes');
const { MongoClient, ObjectID, ObjectId } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth');
			}
		})
		.post((req, res) => {
			const { heroId, deleteAll, newHero } = req.body;
			const filter = { _id: ObjectID(heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					if (heroId) {
						await collection.deleteOne(filter, heroId, (error) => {
							if (error) {
								throw error;
							}
							res.redirect('/heroes');
						});
					} else if (deleteAll) {
						await collection.deleteMany({});
						res.redirect('/heroes');
					} else if (newHero) {
						const [{ id }] = await collection
							.find()
							.sort({ id: -1 })
							.limit(1)
							.toArray();
						await collection.insertOne({ id: id + 1, name: newHero });
						res.redirect('/heroes');
					} else {
						debug('something Hapend');
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const colection = db.collection('heroes');

					const heroes = await colection.find().toArray();

					res.render('heroes', {
						nav,
						title: 'My Heros',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const colection = db.collection(collectionName);

					res.hero = await colection.findOne({ _id: new ObjectID(id) });
					debug(res.hero);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			const newValues = { $set: req.body };
			const filter = { _id: new ObjectId(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.updateOne(filter, newValues, (error) => {
						if (error) {
							throw error;
						}
						res.redirect('/heroes');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('detail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;
