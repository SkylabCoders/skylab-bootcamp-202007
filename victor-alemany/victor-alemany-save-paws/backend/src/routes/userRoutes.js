const express = require('express');

const userListRouterController = require('../controller/userListRouterController');
const userRouterController = require('../controller/userRouterController');

const debug = require('debug')('app:app.js');

const userRouter = express.Router();

function routes(User) {

    userRouter
        .route('/')
        .get(userListRouterController(User).get)

    userRouter
        .route('/register')
        .post(userListRouterController(User).post)

   
        userRouter.use('/:userId', (req, res, next) => {
            User.findById(req.params.userId, (error, user) => {
                if (error) {
                    res.send(error);
                }
                else if (user) {
                    req.user = user;
                    res.status(200);
                    next();
                }else{
                    res.status(404);
                }
            });
        });
    
        userRouter
            .route('/:userId')
            .put(userRouterController.put)
 
        
    return userRouter;

}
module.exports = routes;