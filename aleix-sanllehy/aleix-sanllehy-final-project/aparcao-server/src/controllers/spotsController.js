const debug = require("debug")("app: spotsMethods");
const Spot = require("../models/spots.model");
const User = require("../models/users.model");

async function getSpotsController(req, res) {
  try {
    debug(`LENGTH OF SPOT: ${req.body.carLength}m`);
    await Spot.find(
      { carLength: { $gte: req.body.carLength } },
      (error, spots) => {
        if (error) {
          debug("Connection failed");
          res.send(error);
          res.status(404);
        } else {
          debug("Connection stablished");
          res.json(spots);
          res.status(200);
        }
      }
    );
  } catch (error) {
    throw error;
  }
}

async function aparcaoController(req, res) {
  try {
    let user = await User.findOneAndUpdate(
      { name: req.body.name },
      {
        userLatitude: req.body.userLatitude,
        userLongitude: req.body.userLongitude,
      },
      (err, data) => debug(data)
    );
    user = await User.findOne({ name: req.body.name });
    debug(user);
    res.json(user);
    res.status(200);
  } catch (error) {
    throw error;
  }
}

async function desaparcaoController(req, res) {
  try {
    let user = await User.findOneAndUpdate(
      { name: req.body.name },
      {
        userLatitude: req.body.userLatitude,
        userLongitude: req.body.userLongitude,
      },
      (err, data) => debug(data)
    );
    user = await User.findOne({ name: req.body.name });
    debug(user);
    res.json(user);
    res.status(200);
  } catch (error) {
    throw error;
  }
}

async function createSpotController(req, res) {
  try {
    debug(`LENGTH OF NEW SPOT: ${req.body.carLength}m`);
    const spotExists = await Spot.findOne({
      spotLatitude: req.body.spotLatitude,
      spotLongitude: req.body.spotLongitude,
    });
    if (spotExists) {
      res.send("Spot already exists");
      res.status(409);
    } else {
      const spot = new Spot(req.body);
      await spot.save();
      res.send("Spot created");
      res.status(200);
    }
  } catch (error) {
    throw error;
  }
}

async function destroySpotController(req, res) {
  try {
    const spot = await Spot.findOne({
      spotLatitude: req.body.spotLatitude,
      spotLongitude: req.body.spotLongitude,
    });
    if (spot) {
      await spot.delete();
      res.send("Spot destroyed");
      res.status(200);
    } else {
      res.send("No spot found");
      res.status(404);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getSpotsController,
  aparcaoController,
  createSpotController,
  destroySpotController,
  desaparcaoController,
};
