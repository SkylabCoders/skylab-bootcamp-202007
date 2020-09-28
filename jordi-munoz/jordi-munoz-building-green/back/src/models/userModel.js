const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  userId: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  admin: { type: Boolean }

});

module.exports = mongoose.model('users', userModel);