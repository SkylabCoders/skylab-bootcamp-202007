const express = require('express');
const usersRouterController =  require('../../controllers/usersRouterController');
const userRouterController =  require('../../controllers/userRouterController');


const userRouter = express.Router();

function routes (User) {
    userRouter.route('/')
    .post(usersRouterController.post)
    .get(usersRouterController.get);

    userRouter.use('/:userId', (req,res,next)=> {
        User.findById(req.params.userId, (error, user) => {
            
            if(error) {
                res.send(error)
            }

            if(user){
                req.user = user;
                next();
            }else {
                res.sendStatus(404);
            }
        });
    });

    userRouter.route('/:userId')
        .put(userRouterController.put)
		.patch(userRouterController.patch)
		.delete(userRouterController.deleter)
		.get(userRouterController.get);

return userRouter;
}

module.exports = routes;