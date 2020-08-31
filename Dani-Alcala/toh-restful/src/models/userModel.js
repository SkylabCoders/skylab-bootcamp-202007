const mongoose = require('mongoose')

const { Schema } = mongoose

const userModel = new Schema({
    id: { type: Number },
    name: { type: String },
    gender: { type: String },
    permissions: { type: String }
})

module.exports = mongoose.model('users', userModel)