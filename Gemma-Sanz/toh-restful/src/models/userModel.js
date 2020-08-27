const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
	name: { type: String },
	lastName: { type: String },
	password: { type: String },
	gender: { type: String },
	age: { type: Number },
	email: { type: String }
});

module.exports = mongoose.model('users', userModel);
