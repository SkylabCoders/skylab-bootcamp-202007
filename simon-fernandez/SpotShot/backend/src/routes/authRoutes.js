const express = require("express");
const authRouteController = require("../controller/authRouteController");

const spotRouter = express.Router();

function routes() {
  spotRouter.route("/login").post(authRouteController.login);
  spotRouter.route("/register").post(authRouteController.register);

  return spotRouter;
}
module.exports = routes();
