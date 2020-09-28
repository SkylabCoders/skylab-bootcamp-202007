const debug = require("debug")("app:eventsRouterController");

function eventsController(Event, User) {
  async function post(req, res) {
    const event = new Event(req.body);
    const savedEvent = await event.save();

    User.findById(req.body.owner, (error, user) => {
      if (error) {
        res.status(404);
        res.send("ERROR");
      }

      if (user) {
        user.createdEvents.push(savedEvent._id);
        res.json(user);
        user.save();
      }
    });
  }

  function get(req, res) {
    const query = {};

    Event.find(query, (error, events) => {
      if (error) {
        res.status(400);
      } else {
        res.status(200);
        res.json(events);
      }
    });
  }
  return { get, post };
}

module.exports = eventsController;
