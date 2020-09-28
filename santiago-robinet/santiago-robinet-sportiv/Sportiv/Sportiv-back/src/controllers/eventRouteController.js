const debug = require("debug")("app:eventRouterController");
const Event = require("../../models/eventModel");
const User = require("../../models/userModel");
const { checkArr } = require("../helpers/groupHellper");

const deleter = ({ item }, res) => {
  if (item) {
    let error = null;
    item.remove((removeError) => {
      error = removeError;
      Event.find(item._id, (errorFind, eventFounded) => {
        error = errorFind;

        if (eventFounded && eventFounded.length === 0) {
          User.findById(item.owner, (findByIdError, user) => {
            error = findByIdError;

            if (user) {
              const newArr = user.createdEvents.filter((element) => {
                element !== item._id;
              });

              user.createdEvents = newArr;
              user.save();
            }
          });
        }
      });

      if (error) {
        res.json(error);
        res.status(400);
      } else {
        res.json(item);
        res.status(200);
      }
    });
  }
};

const put = async function (req, res) {
  const { sub } = req.body.user;
  const { _id } = req.item;
  let userUnicId = null;

  await User.findOne({ authid: sub }, (error, user) => {
    if (error) {
      res.status(404);
      res.send(error);
    }
    userUnicId = user._id;
    if (user) {
      user.events = checkArr(user.events, _id);
      user.save();
    }
  });

  Event.findById(_id, (error, event) => {
    if (error) {
      res.status(404);
      res.send(error);
    }
    if (event) {
      event.participants = checkArr(event.participants, userUnicId);
      event.save();
      res.send(event);
    }
  });
};

const patch = (req, res) => {
  const { item } = req;
  if (item) {
    for (let i in req.body) {
      item[i] = req.body[i];
    }

    item.save((error) => {
      if (error) {
        res.send(error);
      } else {
        res.json(item);
      }
    });

    res.status(200);
  } else {
    res.status(404);
  }
};

const get = (req, res) => {
  res.json(req.item);
};

module.exports = { get, deleter, put, patch };
