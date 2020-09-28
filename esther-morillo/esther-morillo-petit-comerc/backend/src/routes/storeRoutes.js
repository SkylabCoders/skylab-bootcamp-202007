const express = require('express');
const debug = require('debug')('app:storeRoutes');

const storeRouteController = require('../controllers/storeRouteController');
const storesRouteController = require('../controllers/storesRouteController');

const storeRouter = express.Router();


function routes(Store, User) {
	const controller = storesRouteController(Store, User);


	storeRouter
		.route('/')
		.get(controller.get)
		.post(controller.post)

	storeRouter
		.use('/:id', (req, res, next) => {
			Store.findById(req.params.id, (error, item) => {
				if (error) {
					res.send(error);
				}
				
				if (item) {
					req.item = item;
					next();
				} else {
					res.status(400);
				}
			});
		})

	storeRouter
		.route('/:id')
		.delete(storeRouteController.deleter)
		.put(storeRouteController.put)
		

	return storeRouter;
}

module.exports = routes;