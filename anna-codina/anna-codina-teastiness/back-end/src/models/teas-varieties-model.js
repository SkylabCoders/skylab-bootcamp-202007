const mongoose = require('mongoose');

const { Schema } = mongoose;

const teaVarietiesModel = new Schema({
  name: { type: String },
  img: { type: String },
  type: { type: String },
  time: { type: String },
  temperature: { type: String },
  description: { type: String },
  benefits: [String]
});

module.exports = mongoose.model('teavarieties', teaVarietiesModel);
