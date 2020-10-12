const mongoose = require('mongoose');

const { Schema } = mongoose;

const bikeModel = new Schema({
	bikeUserId: { type: String },
	bikeName: { type: String },
	bikeType: { type: String },
	bikeDriveStyle: { type: String },
	bikeBrand: { type: String },
	bikeModel: { type: String },
	bikeTotalMeters: { type: Number, default: 0 },
	bikeTotalMinutes: { type: Number, default: 0 },
	bikeLikes: { type: Number, default: 0 },
	bikeStravaId: { type: String },
	bikeLastRoute: { type: Date },
});

module.exports = mongoose.model('Bikes', bikeModel);
