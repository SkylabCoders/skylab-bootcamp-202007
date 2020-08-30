const User = require('../models/userModel');

const post = (req, res) => {
    const user = new User(req.body);
    user.save();
    res.status(201).json(user);
}

const get = (req, res) => {
    const query ={};
    if(req.query.id){
        query.id = req.query.id;
    }

    User.find(query, (error, users) => {
        if(error){
            res.send(error);

        }
        res.json(users)
    })
};

module.exports = { post, get };
