const express = require('express');
const heroRouteController = require('../controllers/heroRouteController');
const heroesRouteController = require('../controllers/heroesRouteController');

const heroRouter = express.Router();

function routes() {
	heroRouter
		.route('/')
		.post(heroesRouteController.post)
		.get(heroesRouteController.get);

	heroRouter
		.route('/:heroId')
		.all(heroRouteController.all)
		.put(heroRouteController.put)
		.patch(heroRouteController.patch)
		.delete(heroRouteController.deleter)
		.get(heroRouteController.get);

	return heroRouter;
}

module.exports = routes;
