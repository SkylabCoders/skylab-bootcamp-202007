const express = require('express');
// const debug = require('debug')('app:diverRoutes');
const diverController = require('../controllers/diverController');
const diverListController = require('../controllers/diverListController');

function routes(Diver) {
	const diverRoutes = express.Router();
	diverRoutes
		.route('/')
		.post(diverListController(Diver).post)
		.get(diverListController(Diver).get);

	diverRoutes
		.route('/:diverId')
		.all(diverController(Diver).all)
		.delete(diverController(Diver).deleter)
		.put(diverController(Diver).put);

	return diverRoutes;
}

module.exports = routes;
