const helpers = require('./helpers');
function methods(Model, secondModel) {
  const deleter = ({ item }, res) => {
    let error = null;

    item.remove((removeError) => {
      error = removeError;

      secondModel.findById(item.ownerId, (findByIdError, user) => {
        error = findByIdError;
        if (user) {
          user.owner = user.owner.filter((id) => {
            if (id + '' !== item._id + '') {
              return id;
            }
          });
          user.save();
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
  };
  const put = async (req, res) => {
    const { item } = req;
    for (let i in req.body) {
      if (i + '' === 'newProductId') {
        item.products = helpers.arrayUpload(req.body[i], item.products);
      } else {
        item[i] = req.body[i];
      }
    }
    item.save(async (error) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      await item.populate('products').execPopulate();

      res.status(200);
      res.json(item);
    });
  };
  return { deleter, put };
}

module.exports = methods;
