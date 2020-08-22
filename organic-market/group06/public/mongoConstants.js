const { MongoClient, ObjectID } = require('mongodb');

const MONGO = {
	url: 'mongodb://localhost:27017',
	dbName: 'skylab-market',
	usersCollection: 'users',
	itemsCollection: 'items'
};

module.exports = MONGO;
