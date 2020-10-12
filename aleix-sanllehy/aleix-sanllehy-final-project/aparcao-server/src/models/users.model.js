const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  make: { type: String },
  model: { type: String },
  carLength: { type: Number },
  userLatitude: { type: Number },
  userLongitude: { type: Number },
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.hash;
  },
});

module.exports = mongoose.model("users", userSchema);
