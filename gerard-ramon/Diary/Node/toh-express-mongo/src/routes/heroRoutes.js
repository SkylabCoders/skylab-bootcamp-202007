const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.post((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client = null;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const { hero } = req.body;
					const db = client.db(dbName);

					const collection = db.collection(collectionName);

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
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const db = client.db(dbName);

					const collection = db.collection(collectionName);

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
		const dbName = 'shieldHeroes';
		const collectionName = 'heroes';
		const url = 'mongodb://localhost:27017';

		(async function mongo() {
			try {
				let { addHero } = req.body;
				[addHero] = addHero;
				const client = await MongoClient.connect(url);
				const db = client.db(dbName);
				const collection = db.collection(collectionName);

				const lastHero = await collection
					.find()
					.sort({ id: -1 })
					.limit(1)
					.toArray();

				const { id } = lastHero[0];

				await collection.insertOne(
					{ id: id + 1, name: addHero },
					(error, response) => {
						if (error) {
							throw error;
						}
						res.redirect('/heroes');
					}
				);

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
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = await client.db(dbName);

					const collection = await db.collection(collectionName);

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
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			const url = 'mongodb://localhost:27017';
			(async function mongo() {
				try {
					const client = await MongoClient.connect(url);
					const db = await client.db(dbName);
					const collection = db.collection(collectionName);

					await collection.updateOne(filter, updateQuery, (error, response) => {
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
