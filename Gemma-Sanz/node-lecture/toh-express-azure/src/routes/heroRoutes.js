const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		// mongodb
		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		let client;
		(async function query() {
			try {
				// la conexión de te revuelve una promesa, tenemos que hacer un await para esperar la respuesta
				client = await MongoClient.connect(url);
				debug('Connection stablished...');

				const db = client.db(dbName);
				// Esperamos a obtener la colección heroes

				const collection = await db.collection('heroes');

				// Tenemos que esperar, así obtenemos tota la data y la convertimos en array
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
			const id = +req.params.heroId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function query() {
				try {
					/* Ejemplo en SQL:			// hacemos una petición, una función asincrona, a sql
												const request = new sql.Request(); */
					client = await MongoClient.connect(url);
					debug('Connection stablished...');
					// En sql:	const { recordset } = await request
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);

					const hero = await collection.find({ id }).toArray();
					// el input desglosa las variables dentro del query, 'id' es un valor de sql entero, que corresponde a id. el primer 'id' lo añadimos al quero con @__
					// ejemplo sql: .input('id', sql.Int, id)
					// Si quisieramos añadir otro input pondriamos lo siguiente
					// .input ('name', sql.Int, name)
					// y en un sólo query podriamos concatenar de la siguiente forma
					// .query(`SELECT * FROM heroes WHERE id= @id and name = @name`);

					// ejemplo sql: .query(`SELECT * FROM heroes WHERE id= @id`);
					// emeplo sql:					el res.hero es un array destructuring que apunta al primer valor de recordset
					[res.hero] = hero;
					// Tenemos que poner el next() porque sino la pagina se queda cargando y no termina, tenemos que emitir el evento para que el siguiente, el get lo capture y pase al siguiente
					next();
				} catch (error) {
					debug(error.stack);
				}
				// Tenemos que cerrar la conexión
				client.close();
			})();
		})
		.post()
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;
