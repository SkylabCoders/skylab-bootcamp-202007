const express = require("express");
const debug = require("debug")("app: questionRouter");
const { MongoClient } = require("mongodb");
const Questions = require("../models/questionModel");

const questionRouter = express.Router();

function router() {
  questionRouter.route("/").post((req, res) => {
    const question = req.body;
    Questions.create(question, (error, response) => {
      if (error) {
        res.status(404, "ERROOOR");
      } else {
        res.json(response);
        res.status(200);
      }
    });
  });
  return questionRouter;
}
module.exports = router();
