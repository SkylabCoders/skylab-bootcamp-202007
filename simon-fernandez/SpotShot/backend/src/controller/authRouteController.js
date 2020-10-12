const Users = require("../models/authModel");
const secretService = require("../helper/secretService");

async function login(req, res) {
  const user = await Users.findOne({ username: req.body.username });

  if (user && secretService.hashValidator(req.body.password, user.hash)) {
    const token = secretService.tokenGenerator(user.id);

    res.send({ ...user.toJSON(), token });
  } else {
    res.json({ status: 404, message: "username and password does not match" });
  }
}
async function register(req, res) {
  if (await Users.findOne({ username: req.body.username })) {
    res.json({ err: `User ${req.body.username} allready exists` });
  } else {
    const user = new Users(req.body);
    user.hash = secretService.hashGenerator(req.body.password);
    await user.save();
    res.sendStatus(200);
    res.send(`User ${req.body.username} created`);
  }
}

module.exports = { login, register };
