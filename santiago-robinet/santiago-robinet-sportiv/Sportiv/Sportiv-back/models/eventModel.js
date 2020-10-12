const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventModel = new Schema ({
    title: { type: String },
    date: { type: String },
    description: { type: String },
    start: { type: String },
    finish: { type: String },
    participants: [ String ],
    owner: { type: String },
    photo: { type: String },
    city:{ type: String },
    street:{ type: String }
})

module.exports = mongoose.model('events', eventModel);