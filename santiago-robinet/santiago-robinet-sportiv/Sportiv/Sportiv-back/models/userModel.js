const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema ({
    authid: { type: String },
    firstTime: { type: Boolean },
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    groups: [ String ],
    events: [ String ],
    classes: [ String ],
    createdEvents: [ {type: mongoose.Schema.Types.ObjectId, ref: 'events'} ],
    createdGroups: [ {type: mongoose.Schema.Types.ObjectId, ref: 'groups'} ],
    createdLessons: [ {type: mongoose.Schema.Types.ObjectId, ref: 'lessons'} ]
})

module.exports = mongoose.model('users', userModel);