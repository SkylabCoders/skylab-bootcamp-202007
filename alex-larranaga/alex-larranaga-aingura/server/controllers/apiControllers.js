const dbCalls = require("../db_utils/dbCalls");
const ainguraControllers = require("../controllers/ainguraControllers");
const Aingura = require("../models/Aingura");
const { mutateDataForDb } = require("../_helpers/ainguraHelpers");

function feedController(req, res) {
  dbCalls
    .getAllAinguras()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
}
function ainguraByIdController(req, res) {
  const id = req.params.ainguraId;
  dbCalls
    .getAinguraById(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
}

async function createNewAinguraController(req, res) {
  const newAingura = mutateDataForDb(req);
  const aingura = new Aingura(newAingura);
  const { lat, lng } = newAingura;
  const coordinates = { lat, lng };
  const validation = await ainguraControllers.validateGeoLocation(
    coordinates,
    Aingura,
    6
  );
  if (validation) {
    res.json({ message: "This Aingura is already registered" });
  } else {
    const savedAingura = await aingura.save();
    res.json(savedAingura);
  }
}

async function geoValidationController(req, res) {
  const lat = req.body.latitude;
  const lng = req.body.longitude;
  const coordinates = { lat, lng };
  const validation = await ainguraControllers.validateGeoLocation(
    coordinates,
    Aingura
  );
  if (validation) {
    res.json({ message: "This Aingura is already registered" });
  } else {
    res.send("Allowed");
  }
}

async function reachAinguraController(req, res) {
  const userLocation = {
    lat: req.body.latitude,
    lng: req.body.longitude,
  };
  const ainguraLocation = {
    lat: req.body.lat,
    lng: req.body.lng,
  };
  const ainguraId = req.body.ainguraId;
  const username = req.body.username;

  const answer = ainguraControllers.validateDistance(
    userLocation,
    ainguraLocation,
    0.1
  );
  if (answer) {
    const aingura = await Aingura.findById({ _id: ainguraId });
    console.log(aingura);
    aingura.visited.push(username);
    aingura.save();
    res.send(`Congrats! You reached ${aingura.name} at ${aingura.location}"`);
  } else {
    res.send("You didn't reach this Aingura yet! Keep searching!");
  }
}

module.exports = {
  feedController,
  ainguraByIdController,
  createNewAinguraController,
  geoValidationController,
  reachAinguraController,
};
