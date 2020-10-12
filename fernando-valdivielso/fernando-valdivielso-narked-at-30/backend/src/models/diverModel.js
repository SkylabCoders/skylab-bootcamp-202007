const mongoose = require('mongoose');

const { Schema } = mongoose;

const diverModel = new Schema({
	userInfo: {
		firstName: { type: String },
		lastName: { type: String },
		company: { type: String },
		location: {
			city: { type: String },
			country: { type: String },
		},
		email: { type: String },
		password: { type: String },
	},
	diveInfo: {
		organization: { type: String },
		level: { type: String },
		numberOfDives: { type: Number },
	},
});

module.exports = mongoose.model('divers', diverModel);
