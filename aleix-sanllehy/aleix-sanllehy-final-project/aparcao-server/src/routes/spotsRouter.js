const express = require("express");
const secureServices = require("../../_helpers/secureServices");
const spotsController = require("../controllers/spotsController");

const spotsMethods = express.Router();

function router() {
  spotsMethods
    .route("/")
    .all(secureServices.tokenValidator)
    .post(spotsController.getSpotsController);

  spotsMethods
    .route("/aparcao")
    .all(secureServices.tokenValidator)
    .post(spotsController.aparcaoController);

  spotsMethods
    .route("/desaparcao")
    .all(secureServices.tokenValidator)
    .post(spotsController.desaparcaoController);

  spotsMethods
    .route("/create")
    .all(secureServices.tokenValidator)
    .post(spotsController.createSpotController);

  spotsMethods
    .route("/destroy")
    .all(secureServices.tokenValidator)
    .post(spotsController.destroySpotController);

  return spotsMethods;
}
module.exports = router;
