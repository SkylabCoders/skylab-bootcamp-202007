const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const heroRoutes = express.Router();
function router(nav) {
	heroRoutes
		.route('/')
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'heroes';
			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');
					const db = await client.db(dbName);
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
			})();
		})
		.post((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'heroes';
			const { hero } = req.body;

			let client = null;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');
					const db = await client.db(dbName);
					const collection = await db.collection('heroes');
					await collection.deleteOne({ _id: new ObjectID(hero) });
					const heroes = await collection.find().toArray();
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
	heroRoutes.route('/createHero').post((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'heroes';
		const { newHero } = req.body;

		let client = null;

		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection established...');
				const db = await client.db(dbName);
				const collection = await db.collection('heroes');
				const [{ id }] = await collection
					.find()
					.sort({ id: -1 })
					.limit(1)
					.toArray();

				await collection.insertOne({ id: id + 1, name: newHero });
				res.redirect('/heroes');
			} catch (error) {
				debug(error.stack);
			}
		})();
	});
	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			// requestHandler que recibe 3 argumentos

			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'heroes';
			const collectionName = 'heroes';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					res.hero = await collection.findOne({ _id: new ObjectID(id) });
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			// conectar a mongodb,
			// actualizar el hero con id: id
			// responder con la pagina actualizada
			// o responder redireccionando a la lista

			// capturar el error manteniendo la misma pagina
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost://27017';
			const dbName = 'heroes';
			const collectionName = 'heroes';
			let client; // cliente de sql

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
			res.render('hero-detail', {
				nav,
				hero: res.hero
			});
		});
	return heroRoutes;
}
module.exports = router;
