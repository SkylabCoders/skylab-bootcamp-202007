const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
	id: { type: String },
	role: { type: String },
	name: { type: String },
	lastName: { type: String },
	age: { type: Number },
	birthDate: { type: String },
	city: { type: String },
	country: { type: String },
	bank: { type: String },
	gender: { type: String },
	likesPets: { type: Number },
	challenges: { type: Number }
});

module.exports = mongoose.model('Users', userModel);
