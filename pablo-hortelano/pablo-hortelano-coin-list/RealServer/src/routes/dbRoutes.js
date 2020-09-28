const express = require("express");
const getDB = require("../config/db");
const movements = require("../../public/mocks/db.json");

const dbRouter = express.Router();

function router() {
  const collectionName = "movements";

  dbRouter.route("/").get((req, res) => {
    (async () => {
      const db = await getDB();
      await db.collection(collectionName).deleteMany({});
      const response = await db
        .collection(collectionName)
        .insertMany(movements);

      res.json(response);
    })();
  });
  return dbRouter;
}

module.exports = router;
