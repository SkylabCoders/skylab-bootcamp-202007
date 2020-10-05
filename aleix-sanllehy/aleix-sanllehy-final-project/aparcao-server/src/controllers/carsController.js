const debug = require("debug")("app: carsMethods");
const Makes = require("../models/makes.model");
const Models = require("../models/models.model");
const User = require("../models/users.model");

async function getMakesController(req, res) {
  await Makes.find({}, (error, makes) => {
    if (error) {
      debug("Connection failed");
      res.send(error);
      res.status(404);
    } else {
      debug("Connection stablished");
      res.status(200);
      res.json(makes);
    }
  });
}

async function getModelsByMakeController(req, res) {
  await Models.find({ make: req.body.make }, (error, models) => {
    if (error) {
      debug("Connection failed");
      res.send(error);
      res.status(404);
    } else {
      debug("Connection stablished");
      res.status(200);
      res.json(models);
    }
  });
}

async function selectCarController(req, res) {
  const user = await User.findOneAndUpdate(
    { name: req.body.name },
    {
      make: req.body.make,
      model: req.body.model,
      carLength: req.body.carLength,
    },
    (err, data) => debug(data)
  );
  const newUser = await User.findOne({ name: req.body.name });
  debug(user);
  res.json({
    newUser,
    message: `Car updated: ${req.body.make} ${req.body.model}`,
    status: 200,
  });
}

module.exports = {
  getMakesController,
  getModelsByMakeController,
  selectCarController,
};
