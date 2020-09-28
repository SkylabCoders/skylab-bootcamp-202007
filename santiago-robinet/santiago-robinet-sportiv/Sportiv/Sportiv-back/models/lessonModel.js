const mongoose = require('mongoose');

const { Schema } = mongoose;

const lessonModel = new Schema (  {
    title: { type: String },
    photo: { type: String },
    description: { type: String },
    level: { type: String },
    duration: { type: String },
    price: { type: Number },
    date: { type: String }
  }
)

module.exports = mongoose.model('lessons', lessonModel);