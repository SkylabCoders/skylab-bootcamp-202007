const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
    id: { type: Number},
    name: { type: String},
    lastName: { type: String},
    email: { type: String},
    password: {type: String}
});

module.exports = mongoose.model('Users',userModel);