const express = require('express');
const debug = require('debug')('app:heroRoutes');
// const sql = require('mssql');
// Ahora usamos Mongo
const {
	MongoClient,
	ObjectID
} = require('mongodb');

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

				// La conexión me devuelve una promesa, así que metemos el await
				const db = client.db(dbName);

				// petición de la colección a la base de datos
				const collection = await db.collection('heroes');

				// toArray porque queremos trabajar con un array
				const heroes = await collection.find().toArray();

				res.render('heroes', {
					nav,
					title: 'My Heros',
					heroes
				});
			} catch (error) {
				/* debug(error.stack); */
				debug(error.stack);
			}

			client.close();
		})();
	});

	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			// para el _id no tenemos que pasar al número, quitamos el +
			const id = req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function query() {
				try {
					// cliente se conecta a la url
					client = await MongoClient.connect(url);
					// obtenemos bd 
					const db = client.db(dbName);
					// dentro de la bd la colección
					const collection = await db.collection(collectionName);
					// dentro de esa colec pedimos un héroe cuyo nombre se Superman, perp en vez de poner uno concreto hay que poner el id ({ _id }), pero cogiendo el id que crea mongo y lo tenemos que consumir así
					res.hero = await collection.findOne({
						_id: new ObjectID(id)
					});
					debug(res.hero);

					next();
				} catch (error) {
					/* debug(error.stack); */
					debug(error);
				}

				client.close();
			})();

		})
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;