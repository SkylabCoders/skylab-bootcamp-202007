const User = require("../models/User");
const secretServices = require("../_helpers/secretServices");

async function loginController(req, res) {
  const user = await User.findOne({ username: req.body.username });

  if (user && secretServices.hashValidator(req.body.password, user.hash)) {
    const token = secretServices.tokenGenerator(user.id);

    res.send({ ...user.toJSON(), token });
  } else {
    res.json({
      status: 401,
      message: "Password is not correct",
    });
  }
}

async function registrationController(req, res) {
  if (await User.findOne({ username: req.body.username })) {
    res.json({
      status: 451,
      message: { message: "User: " + req.body.username + " already exist" },
    });
  }
  let user = new User(req.body);

  if (req.body.password) {
    user.hash = secretServices.hashGenerator(req.body.password);

    await user.save();
    user = await User.findOne({ username: req.body.username });
    const token = secretServices.tokenGenerator(user.id);

    res.json({
      status: 200,
      message: `User ${req.body.username} created succesfully`,
      user: { ...user.toJSON(), token },
    });
  } else {
    res.json({ status: 401, message: "Password is required" });
  }
}
module.exports = { loginController, registrationController };
