const mongoose = require("mongoose");

const { Schema } = mongoose;

const makeSchema = new Schema({
  make: { type: String },
});

module.exports = mongoose.model("makes", makeSchema);

// const carsMakesSchema = new Schema({
//   id: Number,
//   make: String,
//   models: [{ type: mongoose.Schema.Types.id, ref: "carsModels" }
// });
