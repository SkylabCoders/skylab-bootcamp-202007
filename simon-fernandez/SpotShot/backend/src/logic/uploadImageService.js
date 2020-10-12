const fs = require("fs");
const path = require("path");
const { saveImageLocationIntoSpot } = require("./saveImageLocationIntoSpot");

const uploadImageService = (file, filename) => {
  return (async () => {
    const [spotId, imageName] = filename.split("|");
    const route = path.join(__dirname, `../public/spots/${spotId}`);
    if (!fs.existsSync(route)) {
      fs.mkdirSync(route);
    }
    const saveTo = path.join(
      __dirname,
      `../public/spots/${spotId}/${imageName}`
    );
    saveImageLocationIntoSpot(spotId, saveTo);
    await file.pipe(fs.createWriteStream(saveTo));
  })();
};

module.exports = { uploadImageService };
