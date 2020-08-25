/* eslint-disable no-underscore-dangle */
const express = require('express');

const debug = require('debug')('app:heroRoutes');

const heroesRouteController = require('../controllers/heroesRouteController');
const heroRouteController = require('../controllers/heroRouteController')



function routes(Hero) {
    const heroRouter = express.Router();
    const contoller = heroRouteController(Hero);
    heroRouter
        .route('/')
        .post(contoller.post)
        .get(contoller.get);




    heroRouter
        .route('/:heroId')
        .all((req, res, next) => {
            Hero.findById(req.params.heroId, (error, hero) => {
                if (error) {
                    res.send(error);
                }
                if (hero) {
                    req.hero = hero;
                    next();
                }
                // res.sendStatus(404);
            });
        })
        .get(heroesRouteController.get)
        .put(heroesRouteController.put)
        .patch(heroesRouteController.patch)
        .delete(heroesRouteController.deleter);

    return heroRouter;
}

module.exports = routes;