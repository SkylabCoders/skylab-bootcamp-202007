const mongoose = require('mongoose');

const { Schema } = mongoose;

const miniheroModel = new Schema({
  id: { type: Number },
  name: { type: String }
});

module.exports = mongoose.model('minihero', miniheroModel);