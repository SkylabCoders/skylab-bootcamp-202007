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

	heroRoutes.route('/:id').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';

		let client = null;
		(async () => {
			try {
				client = await MongoClient.connect(url);

				const db = client.db(dbName);

				const collection = await db.collection('heroes');

				const id = +req.params.id;
				const hero = await collection.findOne({ id });
				res.render('detail', { nav, hero });
			} catch (err) {
				debug(err);
			}
			client.close();
		})();
	});
	return heroRoutes;
}

module.exports = router;
