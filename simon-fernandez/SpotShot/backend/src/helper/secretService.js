const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretFile = require("../secret/secret");

const expiration = "1d";

function hashGenerator(password) {
  return bcrypt.hashSync(password, 10);
}
function hashValidator(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function tokenGenerator(id) {
  return jsonwebtoken.sign({ sub: id }, secretFile.secret, {
    expiresIn: expiration,
  });
}

module.exports = { hashGenerator, hashValidator, tokenGenerator };
