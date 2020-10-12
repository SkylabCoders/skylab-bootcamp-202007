const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  userIdentifier: { type: String },
  user: { type: String },
  email: { type: String },
  bio: { type: String },
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bands' }],
  band: { type: mongoose.Schema.Types.ObjectId, ref: 'bands' },
  photo: { type: String },
  banner: { type: String }
});

module.exports = mongoose.model('users', userModel);
