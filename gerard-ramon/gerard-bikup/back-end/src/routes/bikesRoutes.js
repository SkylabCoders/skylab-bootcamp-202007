/* eslint-disable no-underscore-dangle */
const express = require('express');
const debug = require('debug')('app:heroRoutes');

const bikeRouterController = require('../controllers/bikeRouterController');
const bikeListRouterController = require('../controllers/bikeListRouterController');
const compoListRouterController = require('../controllers/compoRouterController');

const bikesRouter = express.Router();

function routes(UserModel, BikeModel, CompoModel) {
    const bikeController = bikeRouterController(BikeModel, CompoModel);
    const bikeListController = bikeListRouterController(
        UserModel,
        BikeModel,
        CompoModel
    );
    const compoController = compoListRouterController(CompoModel);

    bikesRouter.route('/').get(bikeListController.get);

    bikesRouter.route('/:bikeId').get(bikeController.get);

    bikesRouter.route('/:bikeId/:compoId').get(compoController.get);

    return bikesRouter;
}

module.exports = routes;
