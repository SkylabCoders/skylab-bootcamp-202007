const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroModel = new Schema({
	id: { type: Number },
	name: { type: String },
	gender: { type: String },
	alterEgo: { type: String }
});

module.exports = mongoose.model('Heroes', heroModel);
