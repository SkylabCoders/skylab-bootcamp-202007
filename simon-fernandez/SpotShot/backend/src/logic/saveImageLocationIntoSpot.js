const Spot = require("../models/spotModel");

const saveImageLocationIntoSpot = async (spotId, route) => {
  await Spot.findByIdAndUpdate(
    { _id: spotId },
    { image: { uri: route } },
    { upsert: true }
  );
};

module.exports = { saveImageLocationIntoSpot };
