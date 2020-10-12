const debug = require('debug')('app:userRouteController');
const { filterArray } = require('./helper');
const User = require('../models/userModel');

const put = (req, res) => {
    const { user } = req;
    const { book } = req.body;
    if (user) {
        user.favoriteBooks = filterArray(user.favoriteBooks, book);

        user.save((error) => {
            if (error) {
                res.status(404);
                res.send(error);
            } else {
                res.status(200);
                res.json(user);
            }
        });
    } else {
        res.status(404);
        res.send('This user does not exist');
    }
};

const get = (req, res) => {
    const { id } = req.params;
    const query = {
        sub: id
    };
    User.findOne(query, (error, user) => {
        if (error) {
            res.status(404);
            return res.send(error);
        } else {
            res.status(200);
            return res.json(user);
        }
    });
};

module.exports = { put, get };
