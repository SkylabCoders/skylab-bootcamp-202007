const Category = require('../models/categoryModel');

function categoriesController(Category) {
  const get = (req, res) => {
    const query = {};
    if (req && req.query && req.query.name) {
      query.name = req.query.name;
    }
    Category.find(query, (error, categories) => {
      if (error) {
        res.send(error);
      }
      res.status(200);
      res.json(categories);
    });
  }

  return { get };
}

module.exports = categoriesController;