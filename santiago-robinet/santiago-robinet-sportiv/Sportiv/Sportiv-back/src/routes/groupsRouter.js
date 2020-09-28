const express = require('express');
const debug = require('debug')('app:groupsRouter');
const groupsListRoutesController = require('../controllers/groupsListRoutesController')
const idController = require('../controllers/groupController')
const groupsRouter = express.Router();

function routes(Group){
    const controller = groupsListRoutesController(Group);
    groupsRouter.route('/')
    .get(controller.get)

    groupsRouter.use('/:groupId', (req,res,next)=> {
        debug(req.params.groupId);
       
        Group.find({ _id: req.params.groupId}, (error, group) => {

            if(error) {
                res.send(error)
                res.status(404)
            }
            if(group){
                res.status(200)
                req.group = group;
                next();
            }
        });
    });

    groupsRouter.route('/:groupId')
    .get(idController.get)
    .put(idController.put)
    

    return groupsRouter;
}

module.exports = routes;