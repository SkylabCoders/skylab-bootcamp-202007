const mongoose = require('mongoose')

const { Schema } = mongoose

const poemModel = new Schema({
    
    userId: { type: String },
    title: { type: String },
    author: { type: String },
    picture: { type: String },
    genre: { type: String },
    likes: [ { type: String } ],
    date: { type: String },
    poem: { type: String }
})

module.exports = mongoose.model('poems', poemModel)