const User = require('../models/userModel');

const post = (req, res) => {
    User.findOne(req.body, (error, user) => {
        if (error) {
            res.status(404);
        } else {
            if (user) {
                res.status(200);
                res.json(user);
            } else {
                const newUser = new User(req.body);
                newUser.save();
                res.status(201);
                res.json(newUser);
            }
        }
    });
};

module.exports = { post };
