const mongoose = require('mongoose');

const { Schema } = mongoose;

const companyModel = new Schema(
    {
        index    : {type : Number},
        guid     :  {type : Number},
        isActive : {type : Boolean},
        balance  : {type : String},
        picture  : {type : String},
        age      : {type : Number},
        eyeColor : {type : String},
        name: {
            first: {type : String},
            last : {type : String},
        },
        company  : {type : String},
        email    : {type : String},
        phone    : {type : String},
        address  : {type : String},
        about    : {type : String},
        registered : {type : String},
        latitude   : {type : String},
        longitued  : {type : String},
        tags       : [String],
        range      : [Number],
        friends    : [{
            id : {type : Number},
            name : {type : String},
        }],
        greeting : {type : String},
        favoriteFruite : {type : String}
    }
)

module.exports = mongoose.model('companys',companyModel);
