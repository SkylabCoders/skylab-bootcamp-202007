const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroModel = new Schema({
	id: { type: String },
	name: { type: String },
	genre: { type: String }
});

module.exports = mongoose.model('Hero', heroModel);
