const express = require('express');
const debug = require('debug')('app: skylabersRoutes');
const { MongoClient, ObjectId, ObjectID } = require('mongodb');

const skylabersRoutes = express.Router();

function router(nav) {
	skylabersRoutes
		.route('/')
		.post((req, res) => {
			const { createSkylaber, deleteSkylabers } = req.body;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldSkylabers';
			const collectionName = 'skylabers';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					if (createSkylaber) {
						const [{ id }] = await collection
							.find()
							.sort({ id: -1 })
							.limit(1)
							.toArray(); // for MAX
						await collection.insertOne({ name: createSkylaber, id: id + 1 });
						// res.redirect('/skylabers'); -> it crashes for some reason
					}
					if (deleteSkylabers === 'all') {
						await collection.deleteMany({});
						res.redirect('/skylabers');
					} else {
						const filter = {
							_id: new ObjectID(deleteSkylabers)
						};
						collection.deleteOne(filter, (error, response) => {
							if (error) {
								throw error;
							}
							debug(response);
							res.redirect('/skylabers');
						});
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldSkylabers';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					debug('Connection stablished...');
					const db = client.db(dbName);
					const collection = db.collection('skylabers');
					const skylabers = await collection.find().toArray();
					res.render('list', {
						nav,
						title: 'All Skylabers',
						skylabers
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	skylabersRoutes
		.route('/:skylaberId')
		.all((req, res, next) => {
			const id = req.params.skylaberId;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldSkylabers';
			const collectionName = 'skylabers';
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					res.skylaber = await collection.findOne({ _id: new ObjectId(id) });

					debug(res.skylaber);
					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			const updateQuery = { $set: req.body };
			const filter = { _id: new ObjectID(req.params.skylaberId) };
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldSkylabers';
			const collectionName = 'skylabers';
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
						res.redirect('/list');
					});
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})
		.get((req, res) => {
			res.render('detail', {
				nav,
				skylaber: res.skylaber
			});
		});

	return skylabersRoutes;
}

module.exports = router;
