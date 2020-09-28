const express = require('express');
const debug = require('debug');

const categoriesRouteController = require('../controllers/categoriesRouteController');

const categoryRouter = express.Router();

function routes(Category) {
  const controller = categoriesRouteController(Category);

  categoryRouter
    .route('/')
    .all((req, res, next) => {
      console.log(req.headers);
      debug(req.headers);
      next();
    })
    .get(controller.get);

  return categoryRouter;
}
module.exports = routes;