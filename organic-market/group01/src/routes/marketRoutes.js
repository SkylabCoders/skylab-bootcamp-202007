const express = require('express');
const debug = require('debug')('app:marketRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const marketRoutes = express.Router();

function router(nav) {
	marketRoutes
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'market';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const db = client.db(dbName);

					const collection = await db.collection('market');

					const heroes = await collection.find().toArray();

					res.render(' INSERTTEMPLATE', {
						nav,
						title: 'market list',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.post((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'market';
			const { deleteHero, createHero } = req.body;
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection established...');

					const db = client.db(dbName);

					const collection = await db.collection('market');
					if (createHero) {
						const [{ id }] = await collection
							.find()
							.sort({ id: -1 })
							.limit(1)
							.toArray(); // for MAX

						collection.insertOne({ id: id + 1, name: createHero });
					}

					if (deleteHero === 'all') {
						await collection.deleteMany({});
					} else {
						await collection.deleteOne({
							_id: new ObjectID(deleteHero)
						});
					}
					const heroes = await collection.find().toArray();

					res.render('INSERT TEMPLATE', {
						nav,
						title: '',
						heroes
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});
	marketRoutes.route('/list')
	// .post((req, res) => {
	// 	const url = 'mongodb://localhost:27017';
	// 	const dbName = 'market';
	// 	let client;
	// 	const deleter = { _id: new ObjectID(req.params.productId) };

	// 	(async function deleteOne() {
	// 		try {
	// 			client = await MongoClient.connect(url);
	// 			debug('connection ok');

	// 			const db = client.db(dbName);

	// 			const collection = await db.collection('heroes');

	// 			await collection.deleteOne(deleter);

	// 			debug(deleter);
	// 			res.render('heroes', {
	// 				nav,
	// 				heroes
	// 			});
	// 			next();
	// 		} catch (error) {
	// 			debug(error.stack);
	// 		}
	// 		client.close();
	// 	})();
	// });
	.get((req, res) => {
		const url = 'mongodb://localhost:27017';
		const dbName = 'market';
		let client;

		(async function query() {
			try {
				client = await MongoClient.connect(url);
				debug('connection ok');

				const db = client.db(dbName);

				const collection = await db.collection('market');

				const products = await collection.find().toArray();

				res.render('list', {
					nav,
					title: 'Products',
					products
				});
			} catch (error) {
				debug(error.stack);
			}
			client.close();
		})();
	});

	marketRoutes.route('/cart').get((req, res) => {
		const cartUser = 'pepito';
		res.render('cart', { cartUser });
	});
	marketRoutes
		.route('/:productId')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'market';
			const collecionName = 'market';

			const ID = req.params.productId;
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);

					const collection = await db.collection(collecionName);

					const heroes = await collection.findOne({ _id: new ObjectID(ID) });
					res.heroes = heroes;
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();

			debug(ID);
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.productId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'market';
			const collectName = 'market';
			let client;

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection(collectName);

					await collection.updateOne(filter, updateQuery, (error, response) => {
						if (error) {
							throw error;
						}
						debug(response);
						res.redirect('/INSERT TEMPLATE');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('INSERT TEMPLATE', {
				nav,
				hero: res.heroes
			});
		});

	return marketRoutes;
}

module.exports = router;
