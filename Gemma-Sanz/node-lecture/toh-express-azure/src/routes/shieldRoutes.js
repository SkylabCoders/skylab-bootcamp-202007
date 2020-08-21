const express = require('express');
// Dentro de nuestra applicación debugeamos shieldRoutes
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroes = require('../../public/mocks/superHeroData.json');

const shieldRoutes = express.Router();

function router() {
	shieldRoutes.route('/').get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbname = 'shieldHeroes';

		let client;
		(async function mongo() {
			try {
				// Llamamos a mongo. Con await consumimos una promesa
				client = await MongoClient.connect(url);
				debug('Connection stablished...');
				const db = client.db(dbname);
				// La respuesta que obtenemos del await del client almacenamos la respuesta y le insertamos todos los datos de la db
				const response = await db.collection('heroes').insertMany(superHeroes);
				debug(response);
				res.json(response);
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();

		res.send('Shield mola más.... Creando superHeroes...');
	});
	return shieldRoutes;
}

module.exports = router;
