const debug = require("debug")("app:userRouterController");
const User = require("../../models/userModel");
const Group = require("../../models/groupModel");
const { checkArr } = require("../helpers/groupHellper");

const get = (req, res) => {
  const { group } = req;

  if (group) {
    res.status(200);
    res.json(group);
  } else {
    res.status(404);
  }
};

const put = (req, res) => {
  const { sub } = req.body.user;
  const { _id } = req.group[0];
  let userUnicId = null;

  User.findOne({ authid: sub }, (error, user) => {
    if (error) {
      res.status(404);
      res.send(error);
    }
    if (user) {
      userUnicId = user._id;
      user.groups = checkArr(user.groups, _id);
      user.save();
    }
  });

  Group.findOne({ _id }, (error, group) => {
    if (error) {
      res.status(404);
      res.send(error);
    }
    if (group) {
      group.membersId = checkArr(group.membersId, userUnicId);
      group.save();
      res.send(group);
    }
  });
};

module.exports = { get, put };
