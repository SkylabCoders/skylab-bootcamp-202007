const DBCONF = require("./dbconf");

const { MongoClient, ObjectID } = require("mongodb");

async function getAllAinguras() {
  let allAinguras;

  console.log("ENTERED API CALL GET ALL AINGURAS");
  try {
    const client = await MongoClient.connect(DBCONF.url);
    const db = client.db(DBCONF.dbName);
    const collection = db.collection(DBCONF.ainguraColl);
    allAinguras = await collection.find().toArray();
  } catch (error) {
    console.log(error);
  }

  return allAinguras;
}

async function getAinguraById(id) {
  let aingura;

  console.log("ENTERED API CALL GET AINGURA BY ID");
  try {
    const client = await MongoClient.connect(DBCONF.url);
    const db = client.db(DBCONF.dbName);
    const collection = db.collection(DBCONF.ainguraColl);
    aingura = await collection.findOne({ _id: new ObjectID(id) });
    console.log(aingura);
    client.close();
  } catch (error) {
    throw error.stack;
  }
  return aingura;
}

module.exports = { getAllAinguras, getAinguraById };
