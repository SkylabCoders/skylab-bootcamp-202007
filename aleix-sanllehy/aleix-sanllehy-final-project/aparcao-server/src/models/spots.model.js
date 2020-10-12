const mongoose = require("mongoose");

const { Schema } = mongoose;

const spotSchema = new Schema({
  spotLatitude: { type: Number, required: true },
  spotLongitude: { type: Number, required: true },
  carLength: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

module.exports = mongoose.model("spots", spotSchema);
