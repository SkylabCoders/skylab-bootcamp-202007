const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes
		.route('/')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';

			let client = null;
			(async () => {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection('heroes');

					res.heroList = await collection.find().toArray();
					next();
				} catch (err) {
					debug(err);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			const { hero } = req.body;
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';

			let client = null;

			(async () => {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.deleteOne({ id: +hero }, (err, response) => {
						if (err) throw err;
						res.redirect('/heroes');
					});
					client.close();
				} catch (err) {
					debug(err);
				}
			})();
		})
		.get((req, res) => {
			res.render('list', { heroList: res.heroList, nav });
		});

	heroRoutes.route('/createHero').post((req, res) => {
		const { newHero } = req.body;

		const url = 'mongodb://localhost:27017';
		const dbName = 'shieldHeroes';
		const collectionName = 'heroes';

		let client = null;
		(async () => {
			client = await MongoClient.connect(url);
			const db = client.db(dbName);
			const collection = await db.collection(collectionName);

			const [{ id }] = await collection
				.find()
				.sort({ id: -1 })
				.limit(1)
				.toArray();
			await collection.insertOne({ name: newHero, id: id + 1 });
			res.redirect('/heroes');
		})();
	});

	heroRoutes
		.route('/:id')
		.all((req, res, next) => {
			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';

			let client = null;
			(async () => {
				try {
					client = await MongoClient.connect(url);

					const db = client.db(dbName);

					const collection = await db.collection('heroes');

					const id = +req.params.id;
					res.hero = await collection.findOne({ id });
					next();
				} catch (err) {
					debug(err);
				}
				client.close();
			})();
		})
		.post((req, res) => {
			const newValues = { $set: req.body };
			const { id } = req.params;

			const url = 'mongodb://localhost:27017';
			const dbName = 'shieldHeroes';
			const collectionName = 'heroes';

			let client = null;

			(async () => {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					collection.updateOne({ id: +id }, newValues, (err, response) => {
						if (err) throw err;
						res.redirect('/heroes');
					});
					client.close();
				} catch (err) {
					debug(err);
				}
			})();
		})
		.get((req, res) => {
			res.render('detail', { nav, hero: res.hero });
		});
	return heroRoutes;
}

module.exports = router;
