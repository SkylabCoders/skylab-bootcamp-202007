const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../_CONFIG.json");

const expirationTime = "1d";

function hashGenerator(password) {
  return bcrypt.hashSync(password, 10);
}

function hashValidator(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function tokenGenerator(id) {
  return jwt.sign({ sub: id }, config.secret, { expiresIn: expirationTime });
}

function tokenValidator(req, res, next) {
  if (!req.headers.authorization) {
    res.send("Empty token");
  } else {
    const token = req.headers.authorization.split(" ")[1];
    return jwt.verify(token, config.secret, (err) => {
      if (err) {
        res.send(err);
      } else next();
    });
  }
}

module.exports = {
  hashGenerator,
  hashValidator,
  tokenGenerator,
  tokenValidator,
};
