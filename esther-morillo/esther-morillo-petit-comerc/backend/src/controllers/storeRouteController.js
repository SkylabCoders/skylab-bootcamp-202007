const User = require('../models/userModel');
const Store = require('../models/storeModel');
const debug = require('debug')('app:storeRouteController');

const get = (req, res) => {
    if (req && req.store) {
        const { store } = req;
        res.json(store);
    } else {
        res.send('Bad parameters');
    }
};

const put = (req, res) => {
    const { item } = req;
    
    if (item) {
        for (let i in req.body) {
            item[i] = req.body[i]; 
        }

        item.save((error) => {
            if (error) {
                res.send(error);
            } else {
                res.json(item);
            }
        });

        res.status(200);
    } else {
        res.status(404);
    }
};

const deleter = ({ item }, res) => {
    if (item) {
        let error = null;
        
        item.remove((removeError) => {
            error = removeError;

            Store.find({ ownerId: item.ownerId }, (errorFind, deleteStatus) => {
                error = errorFind;
    
                if (deleteStatus && deleteStatus.length === 0) {
                    User.findById(item.ownerId, (findByIdError, user) => {
                        error = findByIdError;
                        
                        if (user) {
                            user.owner = false;
                            user.store = [];
                            user.save();
                        }
                    });
                }
            });

            if(error) {
                res.json(error);
                res.status(400);
            } else {
                res.json(item);
                res.status(200);
            }
           
        });
    }


};

module.exports = {
    get,
    put,
    deleter
};
