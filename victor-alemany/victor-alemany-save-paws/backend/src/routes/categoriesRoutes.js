const express = require('express');

const categoriesListRouterController = require('../controller/categoriesListRouterController');

const debug = require('debug')('app:app.js');

const categoriesRouter = express.Router();

function routes(Category) {
    categoriesRouter
        .route('/')
        .get(categoriesListRouterController(Category).get)

    return categoriesRouter;

}
module.exports = routes;