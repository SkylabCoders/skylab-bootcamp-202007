const callback = require('./callback');

function getUser(User) {
  return (req, res) => {
    User.findOne({ userIdentifier: req.params.id })
      .populate('following', 'name city country logo')
      .populate('band', 'name logo')
      .exec((err, user) => {
        if (err) res.status(404);
        else if (user == null) {
          const userToCreate = {
            userIdentifier: req.params.id,
            user: req.body.nickname,
            email: req.body.email,
            photo: req.body.photo,
            bio: '...',
            banner:
              'https://pyxis.nymag.com/v1/imgs/280/a09/831956806c59629838ae46bd3e08255aaa-12-concerts.rsocial.w1200.jpg'
          };
          User.create(userToCreate, callback(res));
        } else {
          res.json(user);
          res.status(200);
        }
      });
  };
}

module.exports = getUser;
