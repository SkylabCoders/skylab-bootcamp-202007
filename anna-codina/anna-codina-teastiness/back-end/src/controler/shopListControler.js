const debug = require('debug')('server:constructor');

function methods(Model, secondModel) {
  const get = (req, res) => {
    let query = {};
    if (req && req.query && req.query.ownerId) {
      query.ownerId = req.query.ownerId;
    }
    if (req && req.query && req.query.name) {
      query.name = req.query.name;
    }
    if (req && req.query && req.query.city) {
      query = { 'address.city': req.query.city };
    }
    Model.find(query)
      .populate('products')
      .exec((error, items) => {
        if (error) {
          res.send(error);
          res.status(400);
        } else {
          res.json(items);
          res.status(200);
        }
      });
  };
  const post = async (req, res) => {
    const shop = new Model(req.body);
    shop.save();
    secondModel.findById(req.body.ownerId, (error, user) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      if (user) {
        user.owner = [...user.owner, shop._id];
        user.save();
        res.status(201);
        res.json(shop);
      }
    });
  };
  return { get, post };
}

module.exports = methods;
