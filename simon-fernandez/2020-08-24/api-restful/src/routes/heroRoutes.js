const express = require('express');
const heroRouteController = require('../controllers/heroRouteController');
const rootHeroRouteController = require('../controllers/rootHeroRouteController');

const heroRouter = express.Router();

function routes(Heroes) {
	heroRouter
		.route('/')
		.post(rootHeroRouteController(Heroes).post)
		.get(rootHeroRouteController(Heroes).get);

	heroRouter
		.route('/:heroId')
		.all((req, res, next) => {
			Heroes.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					req.hero = hero;
					next();
				}
			});
		})
		.put(heroRouteController().put)
		.patch(heroRouteController().patch)
		.delete(heroRouteController().deleter)
		.get(heroRouteController().get);
	return heroRouter;
}

module.exports = routes;
