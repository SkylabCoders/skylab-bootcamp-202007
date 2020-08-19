const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';

		let client = null;
		(async () => {
			try {
				client = await MongoClient.connect(url);

				const db = client.db(dbName);

				const collection = await db.collection('heroes');

				const heroList = await collection.find().toArray();
				res.render('list', { heroList, nav });
			} catch (err) {
				debug(err);
			}
			client.close();
		})();
	});

	heroRoutes
		.route('/:id')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';

			let client = null;
			(async () => {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection('heroes');

					const id = +req.params.id;
					res.hero = await collection.findOne({ id });
					next();
				} catch (err) {
					debug(err);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			const newValues = { $set: req.body };
			const { id } = req.params;
			// const query = { id: req.params.id };

			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';

			let client = null;

			(async () => {
				try {
					client = await MongoClient.connect(url);
					const db = await client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.updateOne(
						{ id: +id },
						newValues,
						(err, response) => {
							if (err) throw err;
							debug(response);
							res.redirect('/heroes');
						}
					);
					client.close();
				} catch (err) {
					debug(err);
				}
			})();
		})
		.get((req, res) => {
			res.render('detail', { nav, hero: res.hero });
		});
	return heroRoutes;
}

module.exports = router;
