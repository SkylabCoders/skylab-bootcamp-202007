const express = require('express');
const debug = require('debug')('app:usersRouter');
const usersRoutesController = require('../controllers/usersRoutesController');
const userRouterController= require('../controllers/userRouterController')

const userRouter = express.Router();

function routes(User){
    const controller = usersRoutesController(User);
    userRouter.route('/')
    .post(controller.post)
   
    userRouter.use('/:authid', (req,res,next)=> {
       
        User.findOne({authid: req.params.authid}, (error, user) => {
                
            if(error) {
                res.send(error)
                res.status(404)
            }
            if(user){
                res.status(200)
                req.user = user;
                next();
            }
        });
    });

    userRouter.route('/:userId')
    .get(userRouterController.get)
    



    return userRouter;
}

module.exports = routes;