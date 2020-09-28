const express = require("express");
const debug = require("debug")("app: questionVetsRouter");
const { MongoClient } = require("mongodb");

const questionVetsRouter = express.Router();

function router() {
  questionVetsRouter.route("/").get((req, res) => {
    const url = "mongodb://localhost:27017";
    const dbName = "myvet";
    let client;
    (async function mongo() {
      try {
        client = await MongoClient.connect(url);

        const db = client.db(dbName);
        const collection = await db.collection("questionmodels");
        const questions = await collection.find().toArray();

        res.json(questions);
      } catch (error) {}
    })();
  });
  return questionVetsRouter;
}
module.exports = router();
