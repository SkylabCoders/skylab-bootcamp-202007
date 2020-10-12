const { filterDelete } = require('./helper');
const debug = require('debug')('app:userRouteController');

const put = (req, res) => {
    const { user } = req;
    const { id } = req.body;

    if(user) {
        user.cart = filterDelete(user.cart, id);
        user.save((error) => {
            if(error) {
                res.status(404);
                res.send(error);
            } else {
                res.status(200);
                res.json(user);
            }
        });
    } else {
        res.status(404);
        res.send("This user doesn't exist");
    }
} 

module.exports = { put }