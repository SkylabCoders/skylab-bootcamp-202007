const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoryModel = new Schema({
  name: { type: String },
  credits: [{
    name: { type: String },
    questions: [{
      id: { type: Number },
      text: { type: String },
      maxValue: { type: Number },
      responseType: { type: String }
    }]
  }]

});

module.exports = mongoose.model('categories', categoryModel);