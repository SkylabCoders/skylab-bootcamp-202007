const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'heroAPI';
const collectionName = 'heroes';
let client;

async function getLastId() {
	client = await MongoClient.connect(url);
	const db = client.db(dbName);
	const collection = db.collection(collectionName);
	const result = await collection.find().sort({ _id: -1 }).limit(1).toArray();
	return result;
}

module.exports = getLastId;
