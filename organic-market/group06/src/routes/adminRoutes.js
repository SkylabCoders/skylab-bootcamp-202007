const express = require('express');

const debug = require('debug')('app:adminRoute');

const { MongoClient, ObjectID } = require('mongodb');

const MONGO = require('../../public/mongoConstants');

const adminRoute = express.Router();

function router(nav) {
	adminRoute
		.route('/addProduct')

		.all((req, res, next) => {
			debug(req.user.admin);
			if (req.user.admin === true) {
				next();
			} else {
				res.redirect('/user/list');
			}
		})
		.get((req, res) => {
			res.render('addProduct', { nav });
		})
		.post((req, res) => {
			debug(req.body);
			// Obtenir info necesaria del req.body
			const { title, type, description, price, rating } = req.body;

			// Fem que guardi a la ddbb
			//  1-Crear la conexio (client)
			//  2- Obtenir la DB
			//  3- Obtenir la collection
			//  4- fer la consulta
			let client = null;

			(async function mongo() {
				try {
					client = await MongoClient.connect(MONGO.url);

					const db = client.db(MONGO.dbName);
					const collection = db.collection(MONGO.itemsCollection);

					const response = await collection.insertOne({
						title,
						type,
						description,
						height: 0,
						width: 0,
						price,
						rating
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
			res.redirect('/admin/addProduct');
		});

	return adminRoute;
}

module.exports = router;
