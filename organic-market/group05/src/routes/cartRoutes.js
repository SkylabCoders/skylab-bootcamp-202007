const express = require('express');
const debug = require('debug')('app:cartRoutes');
const { MongoClient } = require('mongodb');

const getCart = express.Router();

const url = 'mongodb://localhost:27017';


function router(nav) {
	getCart.route('/').get((req, res) => {
        debug(req.user)
        res.render('cart', { nav })
	});

	return getCart;
}

module.exports = router;
