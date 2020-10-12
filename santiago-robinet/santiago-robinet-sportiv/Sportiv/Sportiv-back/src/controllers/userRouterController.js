const debug = require("debug")("app:userRouterController");

const get = (req, res) => {
  const { user } = req;

  if (user) {
    res.status(200);
    res.json(user);
  } else {
    res.status(404);
  }
};

module.exports = { get };
