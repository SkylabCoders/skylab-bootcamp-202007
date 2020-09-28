const methods = require('./helpers');
const put = async (req, res) => {
  const { item } = req;
  if (req && req.query && req.query.teaId) {
    item.favouritesTeas = methods.arrayUpload(
      req.query.teaId,
      item.favouritesTeas
    );
  }
  if (req && req.query && req.query.shopId) {
    item.favouritesShops = methods.arrayUpload(
      req.query.shopId,
      item.favouritesShops
    );
  }
  item.save(async (err) => {
    if (err) {
      res.status(400);
      res.send(err);
    }
    await item
      .populate('favouritesTeas')
      .populate('owner')
      .populate('favouritesShops')
      .execPopulate();
    res.json(item);
  });
  res.status(200);
};

module.exports = { put };
