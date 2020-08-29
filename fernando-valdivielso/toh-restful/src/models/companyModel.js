const mongoose = require('mongoose');

const { Schema } = mongoose;

const companyModel = new Schema({
    index: { type: Number },
    guid: { type: String },
    isActive: { type: Boolean },
    balance: { type: String },
    picture: { type: String },
    age: { type: Number },
    eyeColor: { type: String },
    name: {
        first: { type: String },
        last: { type: String },
    },
    company: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    about: { type: String },
    registered: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    tags: {
        0: { type: String },
        1: { type: String },
        2: { type: String },
        3: { type: String },
        4: { type: String },
    },
    range: {
        0: { type: Number },
        1: { type: Number },
        2: { type: Number },
        3: { type: Number },
        4: { type: Number },
        5: { type: Number },
        6: { type: Number },
        7: { type: Number },
        8: { type: Number },
        9: { type: Number },
    },
    friends: {
        0: {
            id: { type: Number },
            name: { type: String },
        },
        1: {
            id: { type: Number },
            name: { type: String },
        },
        2: {
            id: { type: Number },
            name: { type: String },
        }
    },
    greeting: { type: String },
    favouriteFruit: { type: String }
})




module.exports = mongoose.model('company', companyModel)