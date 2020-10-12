const mongoose = require('mongoose');

const { Schema } = mongoose;

const diveSiteModel = new Schema({
	name: { type: String },
	location: { type: String },
	maxDepth: { type: Number },
	entry_type: { type: String },
	description: { type: String },
});

module.exports = mongoose.model('dive_sites', diveSiteModel);
