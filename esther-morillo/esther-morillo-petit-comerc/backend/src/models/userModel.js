const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const userModel = new Schema({
    sub: { type: String },
    owner: { type: Boolean },
    userName: { type: String },
    emailUser: { type: String },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
    store: [{ type: mongoose.Schema.Types.ObjectId, ref: 'stores' }]
});

module.exports = mongoose.model('users', userModel);
