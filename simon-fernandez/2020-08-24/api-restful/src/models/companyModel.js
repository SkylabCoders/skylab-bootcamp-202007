const mongoose = require('mongoose');

const { Schema } = mongoose;

const companyModel = new Schema({
	index: { type: Number },
	guid: { type: String },
	isActive: { type: Boolean },
	balance: { type: String },
	picture: { type: String },
	age: { type: Number },
	eyeColor: { type: String },
	name: { type: Object, first: { type: String, last: { type: String } } },
	company: { type: String },
	email: { type: String },
	phone: { type: String },
	address: { type: String },
	about: { type: String },
	registered: { Type: Date },
	latitude: { type: String },
	longtitude: { type: String },
	tags: { type: Array },
	range: { type: Array },
	friend: { type: Array },
	greeting: { type: String },
	favoriteFruit: { type: String }
});

module.exports = mongoose.model('Companies', companyModel);
