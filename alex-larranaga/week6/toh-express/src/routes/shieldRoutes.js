const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroes = require('../../public/superHeroData.json');

const shieldRoutes = express.Router();

function router() {
	shieldRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbname = 'heroes';

		(async function mongo() {
			let client;
			let db;
			try {
				client = await MongoClient.connect(url);
				db = client.db(dbname);
				await db.collection('heroes').deleteMany();
				const response = await db.collection('heroes').insertMany(superHeroes);
				debug(response);
				res.json(response);
			} catch (error) {
				debug(error.stack);
			}

			client.close();
		})();
		res.send('Shield es una mierda comparado con la peña de Dragoi Bola');
	});

	return shieldRoutes;
}

module.exports = router;
