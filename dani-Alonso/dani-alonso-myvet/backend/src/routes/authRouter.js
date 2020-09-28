const express = require("express");
const debug = require("debug")("app: vetsRouter");

const authController = require("../../controllers/authController");

const authRouter = express.Router();

function router() {
  authRouter.route("/login").post(authController.loginUser);

  authRouter.route("/register").post(authController.registerUser);

  return authRouter;
}

module.exports = router();
