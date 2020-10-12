const mongoose = require('mongoose');

const { Schema } = mongoose;

const teaPrincipalModel = new Schema({
  type: { type: String, require },
  oxidizedLevel: { type: String, require },
  flavorType: { type: String, require },
  theine: { type: String, require },
  img: { type: String, require },
  varieties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'teavarieties' }]
});

module.exports = mongoose.model('principalteas', teaPrincipalModel);

//
