const express = require('express');
const debug = require('debug')('app:userRoutes');

const usersRouteController = require('../controllers/usersRouteController');
const userRouteController = require('../controllers/userRouteController');
const userRouter = express.Router();

function routes(User) {
    userRouter.route('/').post(usersRouteController.post);

    userRouter.use('/:id', (req, res, next) => {
        User.findOne({ sub: req.params.id }, (error, user) => {
            if (error) {
                res.send(error);
                res.status(404);
            } else {
                res.status(201);
                req.user = user;
                next();
            }
        });
    });

    userRouter
        .route('/:id')
        .put(userRouteController.put)
        .get(userRouteController.get);

    return userRouter;
}

module.exports = routes;
