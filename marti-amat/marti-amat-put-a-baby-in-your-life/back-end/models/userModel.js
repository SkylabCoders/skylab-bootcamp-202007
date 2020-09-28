const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    city: { type: String },
    country: { type: String },
    civilState: { type: String },
    sons: { type: Number },
    job: { type: String },
    mainImage: { type: String },
    secondImage: { type: String },
    thirdImage: { type: String },
    presentation: { type: String },
    email: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
});
module.exports = mongoose.model('userDetail', userModel);