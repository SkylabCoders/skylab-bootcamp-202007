const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
	username: { type: String },
	password: { type: String },
	gender: { type: String },
	admin: { type: Boolean }
});

module.exports = mongoose.model('Users', userModel);
