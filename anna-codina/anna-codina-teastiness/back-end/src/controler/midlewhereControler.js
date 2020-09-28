function method(Model) {
  const getById = (req, res, next) => {
    Model.findById(req.params.id, (error, item) => {
      if (error) {
        res.send(error);
        res.status(400);
      }
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404);
      }
    });
  };
  return { getById };
}

module.exports = method;
