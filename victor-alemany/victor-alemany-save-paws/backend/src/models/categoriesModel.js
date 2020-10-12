const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesModel = new Schema({
  kind:{type: String},
  image: { type: String }
});

module.exports = mongoose.model('categories', categoriesModel);