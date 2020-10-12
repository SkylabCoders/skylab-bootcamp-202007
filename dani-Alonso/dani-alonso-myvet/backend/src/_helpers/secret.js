const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config.json");

function hashGenerator(password) {
  return bcrypt.hashSync(password, 10);
}

function hashValidator(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function tokenGenerator(id, expirationTime) {
  return jwt.sign({ sub: id }, config.secret, {
    expiresIn: expirationTime,
  });
}

module.exports = { hashGenerator, hashValidator, tokenGenerator };
