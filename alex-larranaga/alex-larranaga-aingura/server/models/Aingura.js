const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  id: { type: String },
  name: { type: String, required: true },
  author: { type: String, unique: true, required: true },
  location: { type: String },
  lat: { type: Number, unique: true, required: true },
  lng: { type: Number, unique: true, required: true },
  rating: { type: Number, default: 0 },
  quantityVoting: { type: Number, default: 0 },
  ratingTotal: { type: Number, default: 0 },
  images: {
    type: Array,

    default: {
      uri:
        "https://www.creativefabrica.com/wp-content/uploads/2018/11/Anchor-logo-by-Acongraphic-2.jpg",
    },
  },

  description: { type: String, required: true },
  visited: { type: Array, unique: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("aingura-ainguras", schema);
