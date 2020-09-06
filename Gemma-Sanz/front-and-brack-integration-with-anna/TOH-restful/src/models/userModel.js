const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
	id: { type: Number },
	name: { type: String },
	password: { type: String }
});

module.exports = mongoose.model('users', userModel);
