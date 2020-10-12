const express = require('express');

const userDetailRouter = express.Router();

function routes(UserDetail) {
    userDetailRouter
        .route('/')
        .post((req, res) => {
            const userDetail = new UserDetail(req.body);
            userDetail.save();
            res.status(201).json(userDetail);
        })
        .get((req, res) => {
            const query = {};
            if (req.query.id) { query.id = req.query.id; }

            UserDetail.find(query, (err, usersDetail) => {
                if (err) { res.send(err); }
                console.log("esta es la query", usersDetail);;
                res.json(usersDetail);
            });
        });

    userDetailRouter.use('/:id', (req, res, next) => {

        UserDetail.findById(req.params.id, (err, userDetail) => {

            console.log("//////", req.params);
            if (err) res.send(err);
            if (userDetail) {

                req.userDetail = userDetail;
                next();
            }
        });
    });
    userDetailRouter
        .route('/:id')
        .put((req, res) => {
            const { userDetail } = req;
            if (userDetail) {
                userDetail.name = req.body.name;
                userDetail.gender = req.body.gender;
                userDetail.age = req.body.age;
                userDetail.city = req.body.city;
                userDetail.country = req.body.country;
                userDetail.civilState = req.body.civilState;
                userDetail.sons = req.body.sons;
                userDetail.job = req.body.job;
                userDetail.mainImage = req.body.mainImage;
                userDetail.secondImage = req.body.secondImage;
                userDetail.thirdImage = req.body.thirdImage;
                userDetail.presentation = req.body.presentation;
                userDetail.email = req.body.email;
                userDetail.latitude = req.body.latitude;
                userDetail.longitude = req.body.longitude;
                userDetail.save((err) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(userDetail);
                });
                res.status(200);
            } else {
                res.status(404);
            }
            console.log("estem fent un put");
        })
        .get((req, res) => res.send(req.userDetail));
    return userDetailRouter;
}
module.exports = routes;