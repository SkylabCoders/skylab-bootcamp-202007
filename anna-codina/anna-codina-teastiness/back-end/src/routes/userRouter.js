const express = require('express');
const debug = require('debug')('server:routes');

const userListControler = require('../controler/userListRouterControler');
const userControler = require('../controler/userRouteControler');
const midleWhereControler = require('../controler/midlewhereControler');

function routes(Model) {
  const userRouter = express.Router();
  userRouter.route('/').get(userListControler(Model).get);

  userRouter.use('/:id', midleWhereControler(Model).getById);
  userRouter.route('/:id').put(userControler.put);

  return userRouter;
}

module.exports = routes;
