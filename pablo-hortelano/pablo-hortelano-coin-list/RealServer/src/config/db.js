const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbname = "coinList";

async function getDB() {
  const client = await MongoClient.connect(url);
  return client.db(dbname);
}

module.exports = getDB;
