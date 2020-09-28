function userController(User, Store) {
    function get(req, res) {
        const query = {};

        if (req && req.query && req.query.sub) {
            query.sub = req.query.sub
        }
        
        User.findOne(query)
        .populate({
            path: 'store', populate: {path: 'products'}
        })
        .populate({
            path: 'cart'
        })
        .exec((error, users) => {
            if (error) {
                res.status(400);
                res.send(error);
            } else {
                res.status(200);
                res.json(users);
            }
        });

    }

    function post(req, res) {
        User.findOne(req.body, (error, user) => {
            if (error) {
                res.status(404);
            } else if (user) {
                    res.status(200);
                    res.json(user);
                } else {
                    const newUser = new User(req.body);
                    newUser.save();
                    res.status(201);
                    res.json(newUser);
                }
            }
        );
    }

    return {
        get,
        post
    };
}

module.exports = userController;