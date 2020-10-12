const mongoose = require('mongoose');

const { Schema } = mongoose;

const emailModel = new Schema({
    emisor: { type: String },
    emisorName: { type: String },
    receptor: { type: String },
    date: { type: String },
    hour: { type: Number },
    minute: { type: Number },
    bodyMissage: { type: String }
});
module.exports = mongoose.model('email', emailModel);