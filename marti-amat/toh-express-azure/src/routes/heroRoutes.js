const express = require('express');
const debug = require('debug')('app:heroRoutes');

const { MongoClient, ObjectId, ObjectID } = require('mongodb');
const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/dashboard')
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbname = 'shieldHeroes';
			let client;
			(async function query() {

				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbname);

					const collection = await db.collection('heroes');
					const heroes = await collection.find().toArray();

					res.render('dashboard', {
						nav,
						title: 'Top Heroes',
						heroes: heroes.slice(0, 4)
					});
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})

	heroRoutes.route('/')
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbname = 'shieldHeroes';
			let client;
			(async function query() {

				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbname);

					const collection = await db.collection('heroes');
					const heroes = await collection.find().toArray();

					res.render('heroes', {
						nav,
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})
		.post((req, res) => {
			const { heroId } = req.body;
			const filter = { _id: new ObjectID(heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.deleteOne(filter, (error, response) => {
						if (error) {
							throw error;
						}
						res.redirect('/heroes');
					});
					const heroes = await collection.find().toArray();
					res.render('heroes', {
						nav,
						title: 'My Heroes',
						heroes
					});

				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		})



	heroRoutes.route('/:heroId')
		.all((req, res, next) => {
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					res.hero = await collection.findOne({ _id: new ObjectId(id) });
					debug(res.hero);

					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			}());
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
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
					await collection.updateOne(filter, updateQuery, (error, response) => {
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
			res.render('heroDetail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;
