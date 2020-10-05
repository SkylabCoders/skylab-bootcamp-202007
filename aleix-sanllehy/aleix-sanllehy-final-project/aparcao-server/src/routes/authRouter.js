const express = require("express");
const secureServices = require("../../_helpers/secureServices");
const authController = require("../controllers/authController");

const authMethods = express.Router();

function router() {
  authMethods.route("/").post(authController.loginController);

  authMethods.route("/signup").post(authController.signUpController);

  authMethods
    .route("/loaduser")
    .all(secureServices.tokenValidator)
    .post(authController.loadUserController);

  authMethods
    .route("/changepassword")
    .all(secureServices.tokenValidator)
    .post(authController.changePasswordController);
  return authMethods;
}
module.exports = router;
