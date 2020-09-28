const userSchema = require("../src/models/usersModel");

const {
  hashValidator,
  tokenGenerator,
  hashGenerator,
} = require("../src/_helpers/secret");

async function loginUser(req, res) {
  const user = await userSchema.findOne({ username: req.body.username });
  if (user && hashValidator(req.body.password, user.hash)) {
    const token = tokenGenerator(user.id, "1d");
    res.json({
      user: { ...user.toJSON(), token },

      message: "User logged",
    });
  } else {
    res.json({
      status: 404,
      message: "User does not exist or user and password do not match",
    });
  }
}

async function registerUser(req, res) {
  if (await userSchema.findOne({ username: req.body.username })) {
    res.json({
      status: 400,
      message: `${req.body.username} already exists`,
    });
  } else {
    const user = new userSchema(req.body);
    if (req.body.password) user.hash = hashGenerator(req.body.password);
    const token = tokenGenerator(user.id, "1d");
    await user.save(req.body, (err) => {
      if (err) {
        res.json(err);
      } else {
        res.json({
          user: { ...user.toJSON(), token },
          message: "User created successfully",
        });
      }
    });
  }
}

module.exports = { loginUser, registerUser };
