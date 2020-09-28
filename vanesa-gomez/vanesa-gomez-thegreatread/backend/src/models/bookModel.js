const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookModel = new Schema({
    id: { type: Number },
    title: { type: String },
    author: { type: String },
    averageRating: { type: Number },
    image: { type: String },
    description: { type: String },
    editorial: { type: String },
    year: { type: String },
    isbn: { type: Number },
    genre: { type: String },
    isFavorite: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', bookModel);
