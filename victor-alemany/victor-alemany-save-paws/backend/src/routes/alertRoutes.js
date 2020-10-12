const express = require('express');

const alertListRouterController = require('../controller/alertListRouterController');

const alertRouterController = require('../controller/alertRouterController');

const debug = require('debug')('app:app.js');

const alertRouter = express.Router();

function routes(Alert) {
    alertRouter
        .route('/')
        .get(alertListRouterController(Alert).get)
    
    alertRouter
        .route('/newalert')
        .post(alertListRouterController(Alert).post)
    
        
    alertRouter.use('/:alertId', (req, res, next) => {
        Alert.findById(req.params.alertId, (error, alert) => {
            if (error) {
                res.send(error).status(404);
            }
            if (alert) {
                req.alert = alert;
                res.status(200);
                next();
            } 
        });
    });

    alertRouter
        .route('/:alertId')
        .get(alertRouterController.get)
        .put(alertRouterController.put)

    return alertRouter;

}
module.exports = routes;