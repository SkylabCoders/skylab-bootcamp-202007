const mongoose = require('mongoose');

const { Schema } = mongoose;

const bandModel = new Schema({
  public: { type: Boolean },
  name: { type: String },
  bio: { type: String },
  logo: { type: String },
  banner: { type: String },
  city: { type: String },
  country: { type: String },
  tags: [String],
  discography: [
    {
      title: { type: String },
      img: { type: String },
      date: { type: Date },
      songs: [
        {
          title: { type: String },
          time: { type: String }
        }
      ]
    }
  ],
  concerts: [
    {
      date: { type: Date },
      city: { type: String }
    }
  ],
  photos: [String],
  socialNetwork: {
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String }
  }
});

module.exports = mongoose.model('bands', bandModel);
