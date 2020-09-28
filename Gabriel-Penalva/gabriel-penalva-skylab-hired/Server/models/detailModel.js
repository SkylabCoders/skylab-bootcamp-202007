const mongoose = require('mongoose');

const { Schema } = mongoose;

const detailModel = new Schema({
    isBackend: { type: Boolean },
    isFrontend: { type: Boolean },
    isFullstack: { type: Boolean },
    isJunior: { type: Boolean },
    isSenior: { type: Boolean },
    haveFile: { type: Boolean },
    isQuestion: { type: Boolean },
    description: { type: String },
    entryCommentList: [{ type: String }],
    entryPopularity: { type: Number },
    entryRating: { type: Number },
    companyId: { type: String }
}
);

module.exports = mongoose.model('entries', detailModel);