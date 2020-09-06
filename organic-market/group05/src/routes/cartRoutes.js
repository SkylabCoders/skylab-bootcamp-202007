const express = require('express');
const debug = require('debug')('app:cartRoutes');
const { MongoClient, ObjectId } = require('mongodb');

const getCart = express.Router();

const url =
	'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
const dbName = 'organics';
let collectionName = 'carts';
let client;

function router(nav) {
	getCart
		.route('/')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			(async function mongo() {
				try {
					client = await MongoClient.connect(url);
					const db = client.db(dbName);
					let collection = db.collection(collectionName);

					const { _id, user } = req.user;
					debug(_id);
					const cart = await collection.findOne({ userid: ObjectId(_id) });

					client.close();
					debug('CART', cart);
					const productids = [];
					const { products } = cart;
					debug('PRODUCTIDS', products);

					products.forEach((e) => {
						debug('e', e);
						productids.push(e.productid);
					});
					debug('productids', productids);

					collectionName = 'products';
					collection = db.collection(collectionName);

					/* const allproducts = await collection.find();
					const filteredProducts = [];

					for (let i = 0; i < productids.length; i + 1) {
						filteredProducts.push(
							allproducts.filter((element) => productids[i] === element._id)
						);
					}

					debug('filteredProducts', filteredProducts); */

					/* {
						$lookup:
						  {
							from: carts,
							localField: <field from the input documents>,
							foreignField: <field from the documents of the "from" collection>,
							as: <output array field>
						  }
					 } */

					res.render('cart', { nav, user });
				} catch (error) {
					debug(error.stack);
				}

				client.close();
			})();
		});

	return getCart;
}

module.exports = router;
