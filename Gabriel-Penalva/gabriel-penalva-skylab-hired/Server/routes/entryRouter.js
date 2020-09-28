const express = require('express');
const jwt = require('jsonwebtoken');
const tokenVerify = require('../controllers/tokenVerifyController');
const protectedRoute = express.Router();

protectedRoute.use(tokenVerify);

function routes(Item) {
    const detailRouter = express.Router();
    const detailRouteController = require('../controllers/getItemRouteController');
    const loginRouteController = require('../controllers/loginRouteController');
    const registerRouteController = require('../controllers/registerRouteController');
    const getListController = require('../controllers/getListRouteController');
    const addCommentRouteController = require('../controllers/addCommentRouteController');
    //with entry model
    detailRouter
        .route('/entries')
        .get(protectedRoute, detailRouteController(Item).get);
    detailRouter
        .route('/addEntry')
        .post(protectedRoute, detailRouteController(Item).post);
    detailRouter
        .route('/addPop')
        .patch(protectedRoute, detailRouteController(Item).patch)
    //with user
    detailRouter
        .route('/api/login')
        .post(loginRouteController(Item).post);
    detailRouter
        .route('/api/register')
        .post(registerRouteController(Item).post);
    detailRouter
        .route('/api/user/:list')
        .get(protectedRoute, getListController(Item).get);
    detailRouter
        .route('/api/edit')
        .put(protectedRoute, registerRouteController(Item).put)


    //with comment
    detailRouter
        .route('/comments')
        .get(protectedRoute, detailRouteController(Item).get)
        .post(protectedRoute, addCommentRouteController(Item).post)
        .patch(protectedRoute, addCommentRouteController(Item).patch)
    return detailRouter;
}

module.exports = routes;