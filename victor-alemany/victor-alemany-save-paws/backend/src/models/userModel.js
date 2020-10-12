const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  name: { type: String },
  lastname: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: String },
  alerts: [Number],
  image: { type: String },
  city: { type: String },
  auth: { type: String },
  user: {type: String}
});

module.exports = mongoose.model('users', userModel);