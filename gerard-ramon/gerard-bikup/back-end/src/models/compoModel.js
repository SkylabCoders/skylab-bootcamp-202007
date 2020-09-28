const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const compoModel = new Schema({
	compoUserId: { type: String },
	compoBikeId: { type: String },
	compoType: { type: String },
	compoDisplayName: { type: String },
	compoLife: { type: Number },
	compoAccumulatedMeters: { type: Number, default: 0 },
	compoAccumulatedMinutes: { type: Number, default: 0 },
	compoBrand: { type: String },
	compoModel: { type: String },
});

module.exports = mongoose.model('Components', compoModel);
