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
	heroRoutes.route('/')
		// todo lo que viene antes del get 
		.all((req, res, next) => {
			if(req.user) {
				next();
			} else {
				res.redirect('auth/signin');
			}
		})
		.post((req, res) => {
			const {
				heroId,
				deleteAll,
				newHero
			} = req.body;

			const filter = {
				_id: ObjectID(heroId)
			};

			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);

					if (heroId) {
						await collection.deleteOne(filter, heroId, (error) => {
							if (error) {
								throw error;
							}
							// debug(response);
							res.redirect('/heroes');
						});
					} else if (deleteAll) {
						await collection.deleteMany({});
						res.redirect('/heroes');
					} else if (newHero) {
						// busca en todos los héroes -find()-, luego ordena de mayor a menor - sort con -1, y cogemos el primero -limit(1)-, luego lo convertimos a un array para que se pueda leer. En la parte izq, el cosnt, desestructuramos el array para coger solo el id, todo lo demás que viene en el objeto no nos interesa.
						const [ {id} ] = await collection.find().sort( {id: -1} ).limit(1).toArray();
						await collection.insertOne({
							name: newHero,
							id: id + 1
						});

						res.redirect('/heroes');
					}

				} catch (error) {
					debug(error.stack);
				}

				client.close();
			}())
		})

		.get((req, res) => {
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
					const collection = db.collection('heroes');

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
					const collection = db.collection(collectionName);
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
		.post((req, res) => {
			// el post es una manera de comunicar información a través de http y luego lo enviaremos a la base de datos
			// configurado el bodyparse - cuando hago un post (un clic, por ej.), creo un json, sale por terminal y que lo devuelva

			// queremos conectarnos a mongodb
			// actualizar el hero con id: _id
			// responder redireccionando a la lista

			// capturar el error manteniendo la misma página

			// no podemos pasar directamente el nuevo valor, hay que hacerlo por objeto y como se hace en mongo, con $set en objeto
			const updateQuery = {
				$set: req.body
			};
			
			const filter = {
				_id: new ObjectID(req.params.heroId)
			};
			
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					// a la base de datos:
					const db = client.db(dbName);
					// obtengo la colección
					const collection = db.collection(collectionName);
					// ahora hay que actualizar a ese héroe
					collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}

						debug(response);
						// cuando resuelva redirecciono a la lista
						res.redirect('/heroes');
					})
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			}())

		})
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.hero // pasamos las propiedades que hay que pintar en el navegador
			});
		});

	return heroRoutes;
}

module.exports = router;