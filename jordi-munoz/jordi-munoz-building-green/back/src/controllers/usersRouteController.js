
const debug = require('debug')('app');

function usersController(User) {

  const post = (req, res) => {

    User.findOne({ userId: req.user.sub }, (err, user) => {
      console.log(user);
      if (err) {
        res.send(404);
      } else if (user === null) {
        const newUser = {
          userId: req.body.user.sub,
          name: req.body.user.nickname,
          email: req.body.user.email
        };

        User.create(newUser, (error, response) => {
          if (error) {
            res.send(404);
          } else {
            res.json(response);
            res.status(200);
          }
        });
      } else {
        res.json(user);
        res.status(200);
      }
    });
  }

  const put = (req, res) => {
    User.findOne({ userId: req.user.sub }, (err, user) => {
      console.log(user);
      if (err) {
        res.send(404);

      } else if (user === null) {
        res.send(404);

      } else {
        user.projects = req.body.projects;
        user.save((error, response) => {


          res.json(response);
          res.status(200);

        });
      }
    });

  }

  return { post, put };

}

module.exports = usersController;

