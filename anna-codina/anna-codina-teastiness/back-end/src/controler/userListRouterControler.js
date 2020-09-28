const debug = require('debug')('server:methods');

function methods(Model) {
  const get = (req, res) => {
    const query = {};
    if (req && req.query && req.query.email) {
      query.email = req.query.email;
    }
    if (req && req.query && req.query.sub) {
      query.sub = req.query.sub;
    }

    Model.findOne(query)
      .populate('owner')
      .populate('favouritesTeas')
      .populate('favouritesShops')
      .exec((error, user) => {
        if (error) {
          res.status(400);
        } else {
          if (user) {
            res.status(200);
            res.json(user);
          } else {
            const newUser = new Model({
              email: query.email,
              sub: query.sub,
              owner: [],
              type: 'user'
            });
            newUser.save();
            res.status(201);
            res.json(newUser);
          }
        }
      });
  };
  return { get };
}

module.exports = methods;
