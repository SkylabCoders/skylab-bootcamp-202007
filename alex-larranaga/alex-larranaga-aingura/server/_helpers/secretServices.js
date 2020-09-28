const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../auth/secret.json");

const expirationTime = "1d";

function hashGenerator(password) {
  return bcrypt.hashSync(password, 10);
}

function hashValidator(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function tokenGenerator(id) {
  return jwt.sign({ sub: id }, secret.secret, { expiresIn: expirationTime });
}

function tokenValidator(req, res, next) {
  if (!req.headers.authorization) {
    res.send("Token dont received");
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, secret.secret, (err) => {
      if (err) {
        res.send(err);
      } else {
        next();
      }
    });
  }
}

module.exports = {
  hashGenerator,
  hashValidator,
  tokenGenerator,
  tokenValidator,
};
