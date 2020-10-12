const mongoose = require("mongoose");

const { Schema } = mongoose;

const modelSchema = new Schema({
  make: { type: String },
  model: { type: String },
  carLength: { type: Number },
});

module.exports = mongoose.model("models", modelSchema);
