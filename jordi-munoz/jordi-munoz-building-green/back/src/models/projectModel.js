const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectModel = new Schema({
  projectName: { type: String },
  location: { type: String },
  square: { type: Number },
  answers: { type: Object },
  userId: { type: String }

});


module.exports = mongoose.model('projects', projectModel);