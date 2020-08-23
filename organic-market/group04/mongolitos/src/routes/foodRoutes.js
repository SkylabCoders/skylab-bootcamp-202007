const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:foodRoutes');

const foodRoutes = express.Router();

function router(nav) {
	foodRoutes
		.route('/')
		/* .all((req, res, next) => {
			if (req.user) {
		 		next();
		 	} else {
		 		res.redirect('auth/signin');
		 	}
		}) */
		.get((req, res) => {
            const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
            const dbName = 'mongoProducts';
            const collectionName = 'products';
            let client;
            (async function mongo() {
                try {
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const collection = db.collection(collectionName);
                    const products = await collection.find().toArray();
                    res.render('foodList', { nav, products });
                } catch (error) {
                    debug(error.stack);
                }
                client.close();
            })();
        });

	foodRoutes
		.route('/:productId')
		.all((req, res, next) => {
			const id = req.params.productId;
			const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const collectionName = 'products';
			let client;

			(async function query() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(collectionName);
					res.product = await collection.findOne({
						_id: new ObjectID(id)
					});

					next();
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		})

		.get((req, res) => {
			res.render('food-detail', {
				nav,
				product: res.product
			});
		})
		.post((req, res) => {
			const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const userCollection = 'users';
			const productCollection = 'products';
			let client;

			const idProduct = {
				_id: ObjectID(req.params.productId)
			};

			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const userNameCollection = db.collection(userCollection);
					const productNameCollection = db.collection(productCollection);

					const product = await productNameCollection.find(idProduct).toArray();

					const [{ title, type, img, price, amount }] = product;

					const cartProducts = [{ title, type, img, price, amount }];

					const result = await userNameCollection.updateOne(
						{ user: 'Victor' },
						{ $set: { cart: cartProducts } }
					);
					debug(result);
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			}())
		});		
		
		return foodRoutes;
}

module.exports = router;






