const mongoose = require('mongoose');
const DATABASE_CONFIG = require('../DATABASE_CONFIG');

const { Schema } = mongoose;

const userModel = new Schema({
  name: { type: String },
  role: { type: String },
  id: { type: Number }
});

module.exports = mongoose.model(DATABASE_CONFIG.usersCollection, userModel);