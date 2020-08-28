const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
	id: { type: Number },
	name: { type: String },
	lastName: { type: String },
	password: { type: String },
	gender: { type: String },
	age: { type: Number }
});

module.exports = mongoose.model('users', userModel);
