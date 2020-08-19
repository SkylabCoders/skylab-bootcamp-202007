const express = require("express");
const debug = require("debug")("app:shieldRoutes");
const { MongoClient } = require("mongodb");

const shieldRoutes = express.Router();

function router(nav) {
  shieldRoutes.route("/").get((req, res) => {
    res.send("Shield es una mierda comparado con la peña de Dragoi Bola");
  });

  return shieldRoutes;
}

module.exports = router;
