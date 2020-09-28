const mongoose = require('mongoose');

const { Schema } = mongoose;

const comment = new Schema(
    {
        likes: { type: Number },
        text: { type: String },
        owner: { type: String }
    }
);
module.exports = mongoose.model('comments', comment);