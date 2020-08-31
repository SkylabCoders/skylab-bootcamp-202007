const express = require('express');
const userRouteController = require('../controller/userRouteController');
const listUsersRouteController = require('../controller/listUsersRouteController');

const userRoutes = express.Router();

function router(User) {

    userRoutes
        .route('/')
        .get(listUsersRouteController.get)
        .post(listUsersRouteController.post)

        userRoutes.use('/:userId', (req, res, next) => {
            User.findById(req.params.userId, (error, user) => {
                if (error) {
                    res.send(error);
                }
                if (user) {
                    req.user = user;
                    next();
                } else{
                    res.sendStatus(404);
                }
            });
        });

        userRoutes
        .route('/:userId')
        .get(userRouteController.get)
        .put(userRouteController.put)
        .patch(userRouteController.patch)
        .delete(userRouteController.deleter);

    return userRoutes;
}

module.exports = router;