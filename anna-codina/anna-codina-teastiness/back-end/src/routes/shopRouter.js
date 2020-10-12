const express = require('express');
const debug = require('debug')('server:routes');

const shopListControler = require('../controler/shopListControler');
const shopControler = require('../controler/shopRouteControler');
const midleWhereControler = require('../controler/midlewhereControler');

function routes(Model, secondModel) {
  const shopRouter = express.Router();
  shopRouter
    .route('/')
    .get(shopListControler(Model).get)
    .post(shopListControler(Model, secondModel).post);
  shopRouter.use('/:id', midleWhereControler(Model).getById);
  shopRouter
    .route('/:id')
    .delete(shopControler(Model, secondModel).deleter)
    .put(shopControler().put);
  return shopRouter;
}

module.exports = routes;
