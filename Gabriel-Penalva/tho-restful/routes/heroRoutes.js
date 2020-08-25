/* eslint-disable no-underscore-dangle */
const express = require('express');

const debug = require('debug')('app:heroRoutes');

const heroesRouteController = require('../controllers/heroesRouteController');



function routes(Hero) {
    const heroRouter = express.Router();
    heroRouter
        .route('/')
        .post((req, res) => {
            const hero = new Hero(req.body);
            hero.save();
            res.status(201).json(hero);
        })
        .get((req, res) => {
            const query = {};
            if (req.query.id) {
                query.id = req.query.id;

            } else if (req.query.name) {
                query.name = req.query.name;


            } else if (req.query.user) {
                query.user = req.query.user;

            }
            debug(query);

            Hero.find(query, (error, heroes) => {
                if (error) res.send(error);

                res.json(heroes);
            })

        })



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