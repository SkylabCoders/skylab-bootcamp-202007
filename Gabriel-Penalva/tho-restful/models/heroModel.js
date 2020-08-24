/* Coded by Gabriel Penalva on Sl¡kylab 2020/08/24 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroModel = new Schema({
    id: { type: Number },
    name: { type: String }
});

module.exports = mongoose.model('heros', heroModel);
