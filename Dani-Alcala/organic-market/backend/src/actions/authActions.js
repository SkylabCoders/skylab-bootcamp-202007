const DBCONF = require('../dbConf');
let NEW_USER_SCHEMA = require('../schemas/userSchema');
const { MongoClient, ObjectID } = require('mongodb');

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
