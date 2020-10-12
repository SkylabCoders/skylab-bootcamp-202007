const express = require("express");

const secretServices = require("../_helpers/secretServices");

const { endpoints } = require("../enviroment");

const apiControllers = require("../controllers/apiControllers");

const apiRouter = express.Router();

function endPoints() {
  apiRouter
    .route(endpoints.feed)
    .all(secretServices.tokenValidator)
    .post(apiControllers.feedController);
  apiRouter
    .route(endpoints.getAingura)
    .get(apiControllers.ainguraByIdController);
  apiRouter
    .route(endpoints.create)
    .post(apiControllers.createNewAinguraController);
  apiRouter
    .route(endpoints.geoValidation)
    .post(apiControllers.geoValidationController);
  apiRouter
    .route(endpoints.reachAingura)
    .post(apiControllers.reachAinguraController);

  return apiRouter;
}

module.exports = endPoints();
