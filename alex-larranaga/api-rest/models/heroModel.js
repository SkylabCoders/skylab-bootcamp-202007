const mongoose = require('mongoose');

const { Schema } = mongoose;

// CREATING SOMETHING LIKE JSON SCHEMA

const heroApi = new Schema({
	id: { type: Number },
	name: { type: String },
	slug: { type: String },
	powerstats: { type: Object },
	appearance: { type: Object }
});

module.exports = mongoose.model('Heroes', heroApi);
