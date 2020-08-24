const express = require('express');
const debug = require('debug')('app:cartRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');

const cartRoutes = express.Router();

function router(nav) {
	cartRoutes
		.route('/')
		.get((req, res) => {
			const { _id } = req.user;
			console.log('AQUI EL ID', _id);
			(async function getProductsFromCart() {
				console.log('HELLO');
				let client;
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection to db established...');
					const db = client.db(DATABASE_CONFIG.dbName);

					const cart_collection = db.collection(DATABASE_CONFIG.cartsCollection);
					const currentCart = await cart_collection.find({ userID: _id }).toArray();
					console.log('CART',currentCart);
					const user_collection = db.collection(DATABASE_CONFIG.userCollection);
					const currentUser = await user_collection.find({ _id: ObjectID(_id) }).toArray();
					console.log('USER', currentUser);
					const product_collection = db.collection(DATABASE_CONFIG.productCollection);
					let productsInCart = [];
					for (let product of currentCart[0].product){
						console.log('AQUI EN EL FOR', product.productId, product);
						let newProduct = await product_collection.find({ _id: ObjectID(product.productId) }).toArray();
						let guarrada = newProduct[0];
						guarrada.quantity = product.quantity;
						productsInCart = [ ...productsInCart, guarrada ];
					}
					console.log('PRODUCTS', productsInCart);
					res.render('index', {
						nav,
						body: ROUTES.cart.page,
						title: ROUTES.cart.title,
						products: productsInCart,
						user: currentUser,
						ROUTES
					});
				} catch (error) {
					console.log('AQUI EL CATCH');
					debug(error.stack);
				}
				debug('Connection to db closed.');
				client.close();
			})();
		});

	return cartRoutes;
}

module.exports = router;
