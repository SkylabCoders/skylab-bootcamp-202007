const express = require('express');
const debug = require('debug')('server:routes');

const teaControler = require('../controler/itemRouterControler');
const teaListControler = require('../controler/itemListRouterControler');
const midleWhereControler = require('../controler/midlewhereControler');

function routes(Model) {
  const teaVarietiesRouter = express.Router();
  teaVarietiesRouter
    .route('/')
    .get(teaListControler(Model).get)
    .post(teaListControler(Model).post);

  teaVarietiesRouter.use('/:id', midleWhereControler(Model).getById);
  teaVarietiesRouter
    .route('/:id')
    .get(teaControler.get)
    .put(teaControler.put)
    .delete(teaControler.deleter);

  return teaVarietiesRouter;
}

module.exports = routes;
