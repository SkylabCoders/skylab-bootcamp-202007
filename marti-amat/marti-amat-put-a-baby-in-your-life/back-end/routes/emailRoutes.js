const express = require('express');

const emailRouter = express.Router();

function routes(Email) {
    emailRouter
        .route('/')
        .post((req, res) => {
            const email = new Email(req.body);
            email.save();
            res.status(201).json(email);
        })
        .get((req, res) => {
            const query = {};
            if (req.query.id) { query.id = req.query.id; }

            Email.find(query, (err, email) => {
                if (err) { res.send(err); }
                console.log("esta es la query", email);;
                res.json(email);
            });
        });

    emailRouter.use('/:email', (req, res, next) => {

        Email.findById(req.params.email, (err, email) => {


            if (err) res.send(err);
            if (email) {

                req.email = email;
                next();
            }
        });
    });
    emailRouter
        .route('/:email')
        .put((req, res) => {
            const { email } = req;
            if (email) {
                email.name = req.body.name;
                email.save((err) => {
                    if (err) {
                        res.send(err);
                    }
                    res.json(email);
                });
                res.status(200);
            } else {
                res.status(404);
            }
            console.log("estem fent un put");
        })
        .get((req, res) => res.send(req.emailDetail));
    return emailRouter;
}
module.exports = routes;