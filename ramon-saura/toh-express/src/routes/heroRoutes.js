const express = require('express');
const debug = require('debug')('index:heroRoutes');
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
					title: 'My Heros',
					heroes: heroes.slice(0, 10)
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

					const colection = await db.collection(collectionName);

					res.hero = await colection.findOne({ _id: new ObjectID(id) });
					debug(res.hero);
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
