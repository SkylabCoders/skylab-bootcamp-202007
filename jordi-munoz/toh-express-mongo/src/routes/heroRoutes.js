const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MOngoClient, MongoClient } = require('mongodb');

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
		})();
	});


	heroRoutes.route('/:heroId')
		.all((req, res, next) => {
			const id = +req.params.heroId;
			(async function query() {
				try {
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(
							`SELECT * FROM heroes WHERE id= @id`);
					[res.hero] = recordset;
					next();
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
