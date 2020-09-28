const Busboy = require("busboy");
const Spots = require("../models/spotModel");
const uploadImageServiceLogic = require("../logic/uploadImageService");
const validateDistanceLogic = require("../logic/validateDistance");
const databaseCalls = require("../database-utils/databaseCalls");

const get = (req, res) => {
  req.params.spotId
    ? databaseCalls.getProductById(req.params.spotId).then((response) => {
        res.json(response);
      })
    : databaseCalls.getAllProducts().then((response) => res.json(response));
};
const post = async (req, res) => {
  const spot = new Spots(req.body);
  let checkSpots = false;
  const response = await databaseCalls.getAllProducts();
  response.map((element) => {
    if (validateDistanceLogic.validateDistance(element, req.body, 0.06)) {
      checkSpots = true;
    }
    return true;
  });

  if (checkSpots) {
    res.status(208);
    res.send("There is a existing spot in your location");
  } else {
    spot.save((err, spotInput) => {
      if (err) res.json(err);
      else res.json(spotInput);
    });
    res.status(200);
  }
};

const deleter = (req, res) => {
  databaseCalls.removeSpotById(req.body.spotId).then((response) => {
    res.send(response);
  });
};

const uploadImage = (req, res) => {
  try {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      uploadImageServiceLogic.uploadImageService(file, filename);
    });
    busboy.on("finish", () => {
      res.send("uploaded");
    });
    req.pipe(busboy);
  } catch (error) {
    res.status(400);
  }
};

module.exports = { get, post, deleter, uploadImage };
