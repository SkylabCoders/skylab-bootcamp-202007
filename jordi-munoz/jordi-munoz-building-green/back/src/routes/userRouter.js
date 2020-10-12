const express = require('express');
const debug = require('debug');

const usersRouteController = require('../controllers/usersRouteController');

const userRouter = express.Router();

function routes(User) {
  const controller = usersRouteController(User);

  userRouter
    .route('/')
    .all((req, res, next) => {

      next();
    });

  userRouter
    .route('/')
    .post(controller.post)
    .put(controller.put)

  return userRouter;
}
module.exports = routes;