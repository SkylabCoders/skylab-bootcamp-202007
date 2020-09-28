const express = require("express");

const authController = require("../controllers/authControllers");

const authRouter = express.Router();

function authMethods() {
  authRouter.route("/").post(authController.loginController);
  authRouter.route("/register").post(authController.registrationController);
  return authRouter;
}

module.exports = authMethods();
