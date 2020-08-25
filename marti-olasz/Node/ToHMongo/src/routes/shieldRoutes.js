const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const heroes = require('../../public/mocks/superHeroData.json');

const shieldRoutes = express.Router();

function router() {
	const url = 'mongodb://localhost:27017';
	const dbname = 'shieldHeroes';

	shieldRoutes.route('/').get((req, res) => {
		(async () => {
			let client = null;

			try {
				client = await MongoClient.connect(url);
				const db = client.db(dbname);
				await db.collection('heroes').deleteMany({});
				const response = await db.collection('heroes').insertMany(heroes);

				res.json(response);
			} catch (err) {
				debug(err.stack);
			}

			client.close();
		})();

		res.send('cargando heroes');
	});
	return shieldRoutes;
}

module.exports = router;
