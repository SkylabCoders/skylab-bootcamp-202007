const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const storeModel = new Schema({
    storeId: { type: String },
    ownerId: { type: String },
    storeName: { type: String, required: true },
    storeImage: { type: String, required: true },
    web: { type: String },
    identityName: { type: String, required: true },
    cif: { type: String, required: true },
    emailCompany: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    location: [ Number ],
    workingHours: { type: String, required: true},
    descriptionStore: { type: String, required: true },
    type: { type: String, required: true },
    categories: [ String ],
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }],
    status: { type: Boolean }   
});

module.exports = mongoose.model('stores', storeModel);