const DBCONF = require('../dbConf');
let NEW_USER_SCHEMA = require('../schemas/userSchema');
const { MongoClient, ObjectID } = require('mongodb');

let cart = [];

module.exports = async function getAllProducts() {
	let allProducts;
	try {
		const client = await MongoClient.connect(DBCONF.url);
		const db = client.db(DBCONF.dbName);
		const collection = db.collection(DBCONF.marketColl);
		allProducts = await collection.find().toArray();
	} catch (error) {
		throw error.stack;
	}
	return allProducts;
};

module.exports = async function registerUser(userObject) {
	(NEW_USER_SCHEMA.username = userObject.username),
		(NEW_USER_SCHEMA.password = userObject.password);
	const userInfo = {};
	try {
		const client = await MongoClient.connect(DBCONF.url);
		const db = client.db(DBCONF.dbName);
		const collection = db.collection(DBCONF.marketColl);
		await collection.insertOne(NEW_USER_SCHEMA);
		userInfo = await collection.findOne({ name: NEW_USER_SCHEMA.username });
	} catch (error) {
		throw error.stack;
	}
	return userInfo;
};

// module.exports = async function getProductById(_id) {
// 	let productById = {};

// 	try {
// 		const client = await MongoClient.connect(DBCONF.url);
// 		const db = client.db(DBCONF.dbName);
// 		const collection = await db.collection(DBCONF.marketColl);
// 		productById = await collection
// 			.findOne({ _id: new ObjectID(_id) })
// 			.toArray();
// 	} catch (error) {
// 		throw error.stack;
// 	}
// 	return productById;
// };

// module.exports = async function deleteProductById(_id) {
// 	try {
// 		const client = await MongoClient.connect(DBCONF.url);
// 		const db = client.db(DBCONF.dbName);
// 		const collection = await db.collection(DBCONF.marketColl);
// 		await collection.deleteOne({ _id: new ObjectID(_id) }).toArray();
// 	} catch (error) {
// 		throw error.stack;
// 	}
// };
