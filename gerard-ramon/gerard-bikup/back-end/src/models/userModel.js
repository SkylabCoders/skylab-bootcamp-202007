const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
	email: { type: String },
	password: { type: String },
	username: { type: String },
	signUpDate: { type: Date, default: Date.now },
	profilePicture: {
		type: String,
		default:
			'https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53aa4c97b74918797ef889/49939c4bd610049ad5bb132cd4fb6c87/bikup-logo.png',
	},
	stravaUserId: { type: String },
	stravaAccessToken: { type: String },
	stravaRefreshToken: { type: String },
	stravaTokenExpire: { type: Number },
	stravaLastRoute: { type: Date },
});

module.exports = mongoose.model('Users', userModel);
