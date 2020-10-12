const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const productModel = new Schema({
    storeId: { type: String },
    productName: { type: String, required: true },
    image: { type: String, required: true },
    amount: { type: Number, required: true },
    sizes: [ String ],
    description: { type: String, required: true },
    price: { type: String, required: true },
    off: { type: String, required: true },
    currentPrice: { type: String, required: true },
    status: { type: Boolean }
});

module.exports = mongoose.model('products', productModel);