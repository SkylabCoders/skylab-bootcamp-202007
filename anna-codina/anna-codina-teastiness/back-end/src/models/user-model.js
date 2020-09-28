const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'shops' }],
  email: { type: String, require },
  sub: { type: String, require },
  type: { type: String, require },
  favouritesTeas: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'teavarieties' }
  ],
  favouritesShops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'shops' }]
});

module.exports = mongoose.model('users', userModel);
