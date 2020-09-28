const { MongoClient, ObjectID } = require("mongodb");
const DBCONF = require("./databaseConfig");

const getAllProducts = async () => {
  let allSpots;
  let client;
  try {
    client = await MongoClient.connect(DBCONF.url);
    const db = client.db(DBCONF.dbName);
    const collection = db.collection(DBCONF.spotsColl);
    allSpots = await collection.find().toArray();
    client.close();
    return allSpots;
  } catch (error) {
    throw error.stack;
  }
};

const getProductById = async (spotId) => {
  let spot;
  try {
    const client = await MongoClient.connect(DBCONF.url);
    const db = client.db(DBCONF.dbName);
    const collection = db.collection(DBCONF.spotsColl);
    spot = await collection.findOne({ _id: new ObjectID(spotId) });
  } catch (error) {
    throw error.stack;
  }
  return spot;
};

const removeSpotById = async (spotId) => {
  try {
    const client = await MongoClient.connect(DBCONF.url);
    const db = client.db(DBCONF.dbName);
    const collection = db.collection(DBCONF.spotsColl);
    await collection.remove({ _id: new ObjectID(spotId) });
  } catch (error) {
    throw error.stack;
  }
  return `Spot ${spotId} removed`;
};
module.exports = { getAllProducts, getProductById, removeSpotById };
