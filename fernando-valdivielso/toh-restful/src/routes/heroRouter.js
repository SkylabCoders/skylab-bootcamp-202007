/* eslint-disable no-underscore-dangle */
const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroRouteController = require('../controllers/heroRouteController');
const heroesRouteController = require('../controllers/heroesRouteController');

const heroRouter = express.Router();


function routes() {
  heroRouter
    .route('/')
    .post(heroesRouteController().post)
    .get(heroesRouteController().get);
  heroRouter
    .route('/:heroId')
    .all(heroRouteController.all)
    .get(heroRouteController.get)
    .put(heroRouteController.put)
    .patch(heroRouteController.patch)
    .delete(heroRouteController.deleter);

  return heroRouter;
}
module.exports = routes;