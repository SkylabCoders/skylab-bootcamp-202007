const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/')
	.post((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		let client;
		const deleter = { _id: new ObjectID(req.params.heroId) };


		(async function deleteOne() {
			try {
				client = await MongoClient.connect(url);
				debug('connection ok');

				const db = client.db(dbName);

				const collection = await db.collection('heroes')
				
				await collection.deleteOne(deleter);


				debug(deleter)
				res.render('heroes', {
					nav,
					heroes
				});
				next();
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
				debug('connection ok');

				const db = client.db(dbName);

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
	});
	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			const id = req.params.heroId;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('connection ok');

					const db = client.db(dbName);

					const collection = await db.collection(collectionName);
					res.hero = await collection.findOne({ _id: new ObjectID(id) });

					debug(res.hero);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			//quiero conectarme a mongodb, actualizar el hero con id: _id y responder con la página actualizada
			//o responder redireccionando a la lista y capturar el error manteniendo la misma página

			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };

			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = (await client).db(dbName);
					const collection = await db.collection(collectionName);
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
			res.render('hero-detail', {
				nav,
				hero: res.hero
			});
		});
	return heroRoutes;
}

module.exports = router;
