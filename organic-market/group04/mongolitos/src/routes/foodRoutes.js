const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:foodRoutes');
// const { MongoClient } = require('mongodb');

const foodRoutes = express.Router();

function router() {
	foodRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('auth/signin');
			}
		})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'mongoProducts';
			const collectionName = 'products';
			let client;
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client - db(dbName);
					const collection = await db.collection(collectionName);

					res.hero = await collection.findOne({});
				} catch (error) {}
			})();
			res.render('foodList');
		});

	foodRoutes
		.route('/:productId')
		.all((req, res, next) => {
			// para el _id no tenemos que pasar al número, quitamos el +
			const id = req.params.productId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'mongoProducts';
			const collectionName = 'products';
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
					res.product = await collection.findOne({
						_id: new ObjectID(id)
					});
					debug(res.product);

					next();
				} catch (error) {
					/* debug(error.stack); */
					debug(error);
				}

				client.close();
			})();
		})

		.get((req, res) => {
			res.render('food-detail', {
				nav,
				product: res.product // pasamos las propiedades que hay que pintar en el navegador
			});
		});

	return foodRoutes;
}

module.exports = router;
