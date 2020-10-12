const express = require("express");
const spotRouteController = require("../controller/spotRouteController");

const spotRouter = express.Router();

function routes() {
  spotRouter
    .route("/")
    .get(spotRouteController.get)
    .post(spotRouteController.post)
    .delete(spotRouteController.deleter);
  spotRouter.route("/remove").post(spotRouteController.deleter);
  spotRouter.route("/uploadImage").post(spotRouteController.uploadImage);
  spotRouter.route("/:spotId").get(spotRouteController.get);

  return spotRouter;
}
module.exports = routes();
