const express = require('express');

const companyRouteController = require('../controllers/companyRouteController');

const companyRouter = express.Router();

function routes() {
  companyRouter
    .Route('/')
    .get(companyRouteController.get);

  return companyRouter;
}

module.exports = routes;