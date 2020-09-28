const mongoose = require("mongoose");

const { Schema } = mongoose;
const schema = new Schema({
  username: { type: String, required: true },
  title: { type: String, default: "No Title provided" },
  spotStyle: { type: String, default: "other" },
  lat: { type: Number, required: true },
  lgn: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
  image: {
    type: Array,
    default: [
      {
        uri:
          "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1",
      },
    ],
  },
  description: { type: String, default: "No Description provided" },
  rating: { type: String, default: 0 },
});

module.exports = mongoose.model("Spots", schema);
