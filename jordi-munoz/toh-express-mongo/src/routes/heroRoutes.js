const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.post((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			let client;


			(async function query() {
				try {
					const { deleteHero } = req.body;
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const collection = db.collection('heroes');
					await collection.deleteOne({ _id: new ObjectID(deleteHero) })

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
						title: 'My Heroes',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});

	heroRoutes.route('/addHero').post((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		let client;
		let { addHero } = req.body;
		[addHero] = addHero;

		(async function query() {
			try {
				client = await MongoClient.connect(url);

				const db = client.db(dbName);
				const collection = db.collection('heroes');
				const lastHero = await collection.find().sort({ id: -1 }).limit(1).toArray();

				const { id } = lastHero[0];

				await collection.insertOne({ id: id + 1, name: addHero }, (error) => {
					if (error) {
						throw error;
					} else {
						res.redirect('/heroes');
					}
				});


			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	})

	heroRoutes.route('/:heroId')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			const id = req.params.heroId;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');

					const db = client.db(dbName);

					const collection = db.collection(collectionName);

					const hero = await collection.find({ _id: new ObjectID(id) }).toArray();

					[res.hero] = hero;
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			// conectarme a mongodb
			// actualizar el hero con id:_id
			// responder con la pagina actualizada
			// o responder redireccionando a la lista

			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/heroes');
					})
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			}())

		})
		.get((req, res) => {
			res.render('hero-detail', { nav, hero: res.hero });

		});



	return heroRoutes;
}

module.exports = router;
