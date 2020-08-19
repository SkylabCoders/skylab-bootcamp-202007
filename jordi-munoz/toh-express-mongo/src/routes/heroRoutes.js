const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');

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

				const colection = await db.collection('heroes');

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

					const collection = await db.collection(collectionName);

					const hero = await collection.find({ _id: new ObjectID(id) }).toArray();

					[res.hero] = hero;
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('hero-detail', { nav, hero: res.hero });

		});

	return heroRoutes;
}

module.exports = router;
