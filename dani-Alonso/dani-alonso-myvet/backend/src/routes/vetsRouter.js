const express = require("express");
const debug = require("debug")("app: vetsRouter");
const { MongoClient } = require("mongodb");

const vetsRouter = express.Router();

function eoe(req, res) {
  const url = "mongodb://localhost:27017";
  const dbName = "myvet";
  let client;
  (async function mongo() {
    try {
      client = await MongoClient.connect(url);

      const db = client.db(dbName);
      const collection = await db.collection("vets");
      const vets = await collection.find().toArray();
      res.json(vets);
    } catch (error) {
      debug(error.stack);
    }
  })();
}

function router() {
  vetsRouter.route("/").get(eoe);
  return vetsRouter;
}
module.exports = router();
