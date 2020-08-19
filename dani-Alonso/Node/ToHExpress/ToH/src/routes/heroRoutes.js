const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();
function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		let client;
		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('Connection stablished...');
				const db = client.db(dbName);
				const collection = await db.collection('heroes');
				const heroes = await collection.find().toArray();
				res.render('list', { nav, heroList: heroes });
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
					const collection = await db.collection(collectionName);
					res.hero = await collection.findOne({ _id: new ObjectID(id) });
					next();
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
