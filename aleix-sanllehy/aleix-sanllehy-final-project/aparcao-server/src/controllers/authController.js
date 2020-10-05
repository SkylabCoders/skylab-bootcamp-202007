const User = require("../models/users.model");
const secureServices = require("../../_helpers/secureServices");

async function loginController(req, res) {
  const user = await User.findOne({
    $or: [{ name: req.body.name }, { email: req.body.name }],
  });
  if (user && secureServices.hashValidator(req.body.password, user.hash)) {
    const token = secureServices.tokenGenerator(user.id);
    res.send({
      message: `User ${req.body.name} logged in successfully`,
      status: 200,
      user: { ...user.toJSON(), token },
    });
  } else {
    res.json({
      message: "User and password do not match",
      status: 404,
    });
  }
}

async function signUpController(req, res) {
  const result = await User.findOne({ name: req.body.name });
  if (result) {
    res.json({
      message: `User ${req.body.name} already exists`,
      status: 409,
    });
  } else if (req.body.password) {
    const user = new User(req.body);
    user.hash = secureServices.hashGenerator(req.body.password);
    await user.save();
    loginController(req, res);
  } else {
    res.json({ message: "Missing data is required.", status: 409 });
  }
}

async function loadUserController(req, res) {
  const user = await User.findOne({ name: req.body.name });
  if (user) {
    res.json({ user });
  } else {
    res.json({
      message: "Invalid user",
      status: 401,
    });
  }
}

async function changePasswordController(req, res) {
  const user = await User.findOne({ name: req.body.name });
  if (
    user &&
    secureServices.hashValidator(req.body.password, user.hash) &&
    req.body.newPassword
  ) {
    user.hash = secureServices.hashGenerator(req.body.newPassword);
    await user.save();
    res.json({ user, message: "Password changed successfully" });
  } else {
    res.json({
      message: "Old password is wrong",
      status: 401,
    });
  }
}

module.exports = {
  loginController,
  signUpController,
  loadUserController,
  changePasswordController,
};
