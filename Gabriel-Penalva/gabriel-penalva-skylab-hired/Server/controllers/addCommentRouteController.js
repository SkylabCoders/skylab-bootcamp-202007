const Entry = require('../models/detailModel');

function addCommentRouteController(Comment) {
    function post(req, res) {
        if (req && req.body && req.body.textComment && req.body.userId && req.body.entryId) {
            let query = { _id: req.body.entryId }
            let newCommentData = { text: req.body.textComment, likes: 0, owner: req.body.userId }
            let newComment = new Comment(newCommentData)
            newComment.save(newComment, (err, detail) => {
                if (err) {
                    res.status(500)
                    res.json({
                        error: {
                            code: 0,
                            message: 'Mongoose Server Error on save Comment'

                        }
                    });
                } else {

                    Entry.findOneAndUpdate(query, { $push: { entryCommentList: detail._id } }, (error, success) => {
                        if (error) {
                            res.status(500)
                            res.json({
                                error: {
                                    code: 0,
                                    message: 'Mongoose Server Error on save Comment'
                                }
                            });
                        } else {
                            res.json({
                                error: {
                                    code: 5,
                                    message: 'Comment saved correctly'
                                }
                            });
                        }
                    })
                }


            })
        }
        else {
            res.status(400)
            res.json({
                error: {
                    code: 4,
                    message: 'Incorrect params Request'
                }
            });
        }
    }
    function patch(req, res) {
        if (req.body && req.body._id) {
            let query = { _id: req.body._id }
            Comment.findOne(query, (err, success) => {
                if (err) {
                    res.status(500)
                    res.json({
                        error: {
                            code: 0,
                            message: 'Mongoose Server Error on save'
                        }
                    })
                } else {
                    success.likes = ++success.likes
                    success.save((error, done) => {
                        console.log(done)
                        if (error) {
                            console.log('somthing go wrong')
                        } else {
                            res.status(200)
                            res.json({
                                error: {
                                    code: 6,
                                    message: 'Like!'
                                }
                            })
                        }
                    })
                }
            })
        } else {
            res.status(400)
            res.json({
                error: {
                    code: 4,
                    message: 'Incorrect params Request'
                }
            });
        }



    }
    return { post, patch }
}
module.exports = addCommentRouteController