const debug = require('debug')('server:constructor');

function methods(Model) {
  const get = (req, res) => {
    const query = {};
    if (req && req.query && req.query.name) {
      query.name = req.query.name;
    }
    if (req && req.query && req.query.type) {
      query.type = req.query.type;
    }
    if (req && req.query && req.query.benefits) {
      query.benefits = req.query.benefits;
    }
    Model.find(query)
      .populate('varieties')
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
  const post = (req, res) => {
    const tea = new Model(req.body);
    tea.save();
    res.status(201);
    res.json(tea);
  };
  return { get, post };
}

module.exports = methods;
