const mongoose = require("mongoose");

const { Schema } = mongoose;

const vetModel = new Schema({
  id: { type: Number },
  vetname: { type: String },
  horario: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  tags: [String],
  images: [String],
});

module.exports = mongoose.model("vetModel", vetModel);
