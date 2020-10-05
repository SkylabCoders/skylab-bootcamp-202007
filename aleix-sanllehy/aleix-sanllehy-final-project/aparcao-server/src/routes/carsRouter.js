const express = require("express");
const secureServices = require("../../_helpers/secureServices");
const carsController = require("../controllers/carsController");

const carsMethods = express.Router();

function router() {
  carsMethods
    .route("/")
    .all(secureServices.tokenValidator)
    .post(carsController.getMakesController);

  carsMethods
    .route("/modelsbymake")
    .all(secureServices.tokenValidator)
    .post(carsController.getModelsByMakeController);

  carsMethods
    .route("/selectcar")
    .all(secureServices.tokenValidator)
    .post(carsController.selectCarController);

  return carsMethods;
}
module.exports = router;
