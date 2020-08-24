const express = require('express');

const heroRouteControler = require('../controler/heroRouteControler');
const heroesRouteControler = require('../controler/heroesRouteControler');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post(heroesRouteControler.post)
		.get(heroesRouteControler.get);
	heroRouter.use('/:heroId', (req, res, next) => {
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			}
			if (hero) {
				req.hero = hero;
				next();
			} else {
				res.sendStatus(404);
			}
		});
	});
	// let us GET an ONLY element out of an array
	heroRouter
		.route('/:heroId')
		.put(heroRouteControler.put)
		.patch(heroRouteControler.patch)
		.delete(heroRouteControler.deleter)
		.get(heroRouteControler.get);
	return heroRouter;
}

module.exports = routes;
