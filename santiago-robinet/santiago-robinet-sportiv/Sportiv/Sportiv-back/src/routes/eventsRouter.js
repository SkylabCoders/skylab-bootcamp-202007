const express = require("express");
const debug = require("debug")("app:eventsRouter");
const eventsRoutesController = require("../controllers/eventsRoutesController");
const eventRouterController = require("../controllers/eventRouteController");

const eventsRouter = express.Router();

function routes(Event, User) {
  const controller = eventsRoutesController(Event, User);
  const controllerId = eventRouterController;

  eventsRouter.route("/").get(controller.get).post(controller.post);

  eventsRouter.use("/:eventId", (req, res, next) => {
    Event.findById(req.params.eventId, (error, item) => {
      if (error) {
        res.send("ERROR");
      }
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(400);
      }
    });
  });

  eventsRouter
    .route("/:eventId")
    .get(controllerId.get)
    .delete(controllerId.deleter)
    .put(controllerId.put)
    .patch(controllerId.patch);

  return eventsRouter;
}

module.exports = routes;
