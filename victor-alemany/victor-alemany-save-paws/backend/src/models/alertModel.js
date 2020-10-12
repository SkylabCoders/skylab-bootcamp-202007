const mongoose = require('mongoose');

const { Schema } = mongoose;

const alertModel = new Schema({
  followed:[String],
  name:{type: String},
  image: { type: String },
  animal: { type: String, required: true },
  breed: { type: String },
  gender: { type: String },
  weight: { type: Number },
  date: { type: String },
  city: { type: String },
  description: { type: String, required: true },
  coordenates: [Number],
  created:{ type: String },
  comments: { type: String },
  active: {type: Boolean}
});

module.exports = mongoose.model('alerts', alertModel); // collectionName, modelName