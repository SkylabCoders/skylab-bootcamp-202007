const express = require('express');
const debug = require('debug')('app:cartRoutes');
const { MongoClient } = require('mongodb');

const getCart = express.Router();

const url =
	'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';

function router(nav) {
	getCart.route('/').get((req, res) => {
		debug(req.user);
		res.render('cart', { nav });
	});

	return getCart;
}

module.exports = router;
