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
				debug('Connection established...');

				const db = client.db(dbName);

				const collection = await db.collection('heroes');

				const heroes = await collection.find().toArray();

				res.render('heroes', {
					nav,
					title: 'My Heros',
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
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collecionName = 'heroes';

			const ID = req.params.heroId;
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);

					const collection = await db.collection(collecionName);

					const heroes = await collection.findOne({ _id: new ObjectID(ID) });
					res.heroes = heroes;
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();

			debug(ID);
		})
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.heroes
			});
		});

	return heroRoutes;
}

module.exports = router;
