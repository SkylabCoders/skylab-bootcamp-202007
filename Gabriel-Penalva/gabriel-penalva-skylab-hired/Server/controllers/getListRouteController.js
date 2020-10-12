const mongoose = require('mongoose');
function getListController(User) {
    const lists = {
        "favourites": "user_fav_list",
        "entries": "user_entries_list"
    }
    function get(req, res) {
        if (req.params.list && req.query.userId) {
            let query = { _id: new mongoose.Types.ObjectId(req.query.userId) }


            User.find(query).populate(lists[req.params.list]).exec((err, item) => {
                if (err) {
                    res.status(500)
                    res.json({
                        error: {
                            code: 0,
                            message: 'Mongoose Server Error on search'
                        }
                    })
                } else {
                    let [userPopulated] = item
                    res.json(userPopulated[lists[req.params.list]])
                }
            })
        }
        else {
            res.status(400)
            res.json({
                error: {
                    code: 4,
                    message: 'Incorrect params Request.'
                }
            });
        }
    }
    return { get }
}
module.exports = getListController