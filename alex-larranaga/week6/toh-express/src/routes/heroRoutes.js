const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const heroRoutes = express.Router();
function router(nav) {
	heroRoutes.route('/').get((req, res) => {
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
	});
	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'heroes';
			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = await client.db(dbName);
					const collection = await db.collection('heroes');
					const hero = await collection
						.find({ _id: new ObjectID(id) })
						.toArray();
					[res.hero] = hero;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			res.render('hero-detail', { nav, hero: res.hero });
		});
	heroRoutes
		.route('/dashboard')
		.all((req, res, next) => {
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'heroes';
			let client = null;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = await client.db(dbName);
					const collection = await db.collection('heroes');
					const hero = await collection
						.find({ _id: new ObjectID(id) })
						.toArray();
					[res.hero] = hero;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			res.render('dashboard', { nav, hero: res.hero });
		});
	return heroRoutes;
}
module.exports = router;
