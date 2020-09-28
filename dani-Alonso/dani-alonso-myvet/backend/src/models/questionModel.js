const mongoose = require("mongoose");

const { Schema } = mongoose;

const questionModel = new Schema({
  name: { type: String },
  email: { type: String },
  telf: { type: Number },
  question: { type: String },
});

module.exports = mongoose.model("questionModel", questionModel);
