const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroModel = new Schema({
	id: { type: Number },
	name: { type: String },
	slug: { type: String },
	powerstats: {
		intelligence: { type: Number },
		strength: { type: Number },
		speed: { type: Number },
		durability: { type: Number },
		power: { type: Number },
		combat: { type: Number }
	},
	appearance: {
		gender: { type: String },
		race: { type: String },
		height: {
			0: { type: String },
			1: { type: String }
		},
		weight: {
			0: { type: String },
			1: { type: String }
		},
		eyeColor: { type: String },
		hairColor: { type: String }
	},
	biography: {
		fullname: { type: String },
		alterEgos: { type: String },
		aliases: [String],
		placeOfBirth: { type: String },
		firstAppearance: { type: String },
		publisher: { type: String },
		alignment: { type: String }
	},
	work: {
		occupation: { type: String },
		base: { type: String }
	},
	connections: {
		groupAffiliation: { type: String },
		relatives: { type: String }
	},
	images: {
		xs: { type: String },
		sm: { type: String },
		md: { type: String },
		lg: { type: String }
	}
});

module.exports = mongoose.model('heroes', heroModel); // collectionName, modelName
