const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopModel = new Schema({
  ownerId: { type: String, require },
  name: { type: String },
  img: { type: String },
  schedule: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    postalCode: { type: String }
  },
  location: {
    lat: { type: String },
    lng: { type: String }
  },
  description: { type: String },
  cif: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'teavarieties' }]
});

module.exports = mongoose.model('shops', shopModel);
