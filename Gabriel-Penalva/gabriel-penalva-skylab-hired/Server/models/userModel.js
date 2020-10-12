const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
    name: { type: String },
    email: { type: String },
    Bday: { type: Date },
    bootCamp: { type: Number },
    password: { type: String },
    is_aproved: { type: Boolean },
    is_admin: { type: Boolean },
    user_comment_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'entries' }],

    user_fav_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'entries' }],
    user_upVotes_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'entries' }],
    user_entries_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'entries' }]
}
);

module.exports = mongoose.model('users', userModel);