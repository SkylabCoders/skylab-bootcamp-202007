const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectId, ObjectID } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				res.redirect('/');
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
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
				client.close();
			})();
		})
		.post((req, res) => {
			// Aquest deletedHeroId te que ser el mateix que el name del button del form
			const { deletedHero } = req.body;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;
			(async function mongo() {
				client = await MongoClient.connect(url);

				const db = client.db(dbName);

				const collection = db.collection(collectionName);
				if (deletedHero === 'all') {
					await collection.deleteMany({});
				} else {
					const filter = { _id: new ObjectID(deletedHero) };

					await collection.deleteOne(filter, (error, response) => {
						if (error) {
							throw error;
						}
						debug(`${response} deleted!`);
						res.redirect('/heroes');
					});
				}
				const heroes = await collection.find().toArray();
				res.render('heroes', {
					nav,
					title: 'My Heros',
					heroes
				});
			})();
		});

	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const idMongo = req.params.heroId;
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
					// En SQL:	const { recordset } = await request
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					// Dentro del findOne buscamos el _id con el nuevo object id
					res.hero = await collection.findOne({ _id: new ObjectId(idMongo) });
					debug(idMongo);

					/* EN SQL:
					// el input desglosa las variables dentro del query, 'id' es un valor de sql entero, que corresponde a id. el primer 'id' lo añadimos al quero con @__
					// ejemplo sql: .input('id', sql.Int, id)
					// Si quisieramos añadir otro input pondriamos lo siguiente
					// .input ('name', sql.Int, name)
					// y en un sólo query podriamos concatenar de la siguiente forma
					// .query(`SELECT * FROM heroes WHERE id= @id and name = @name`);

					// ejemplo sql: .query(`SELECT * FROM heroes WHERE id= @id`);
					// emeplo sql:					el res.hero es un array destructuring que apunta al primer valor de recordset
					*/
					debug(res.hero);
					// Tenemos que poner el next() porque sino la pagina se queda cargando y no termina, tenemos que emitir el evento para que el siguiente, el get lo capture y pase al siguiente
					next();
				} catch (error) {
					debug(error.stack);
				}
				// Tenemos que cerrar la conexión
				client.close();
			})();
		})
		// el post actualiza un héroe. Tenemos que asegurarnos que le llega un json en req.body. (los nuevos valores llegan en req.body)
		.post((req, res) => {
			// En el post queremos: conectarme a mongoDB, actualizar el hero con id : _d, responder con la pagina actualizada o responder redireccionando a la lista

			// capturar el error mateniendo la misma página
			// en mondodb actualizabamos con updateOne, pero antes necesitavamos la conexión, el selector para obtener la colección
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.heroId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection(collectionName);

					await collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/heroes');
					});
				} catch (error) {
					debug(error.stack);
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
