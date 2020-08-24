const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroModel = new Schema({
	id: { type: Number },
	name: { type: String }
});

module.exports = mongoose.model('heroes', heroModel);
