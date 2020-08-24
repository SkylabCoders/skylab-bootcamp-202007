const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  name: { type: String },
  role: { type: String },
  id: { type: Number }
});

module.exports = mongoose.model('users', userModel);