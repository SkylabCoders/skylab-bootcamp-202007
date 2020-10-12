const debug = require("debug")("app:userRoutesController");

function usersRoutesController(User) {
  function post(req, res) {
    if (!req.body) {
      res.status(400);
      res.send("user is required!");
    } else {
      const query = req.body.authid;
      const user = new User(req.body);
      User.findOne({ authid: query }, (error, foundedUser) => {
        if (error) {
          res.status(404);
        } else {
          if (foundedUser) {
            res.send("User was already created");
          } else {
            user.save();
            res.status(201);
            res.json(user);
          }
        }
      });
    }
  }

  return { post };
}

module.exports = usersRoutesController;
