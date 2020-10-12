

function registerControl(User) {

    function post(req, res) {
        let newUserData
        let query
        if (req && req.body && req.body && req.body.name && req.body.password && req.body.bootCamp && req.body.email) {
            if (req.body.bday) {
                newUserData = {
                    name: req.body.name,
                    bootCamp: req.body.bootCamp,
                    email: req.body.email,
                    Bday: req.body.bday,
                    password: req.body.password,
                    is_aproved: false,
                    is_admin: false,
                    user_comment_list: [],
                    user_upVotes_list: [],
                    user_entries_list: [],
                    user_fav_list: []
                }
            } else {
                newUserData = {
                    name: req.body.name,
                    bootCamp: req.body.bootCamp,
                    email: req.body.email,
                    Bday: '0',
                    password: req.body.password,
                    is_aproved: false,
                    is_admin: false,
                    user_comment_list: [],
                    user_upVotes_list: [],
                    user_entries_list: [],
                    user_fav_list: []
                }
            }
            query = { email: req.body.email }
            console.log(query)
            User.find(query, (error, detail) => {
                console.log(detail, 'detal')
                if (error) res.json({
                    error: {
                        code: 0,
                        message: 'Mongoose Server Error on search',
                        error
                    }
                });

                if ((detail.length > 0) && (detail[0].email === newUserData.email)) {

                    res.status(400)
                    res.json({
                        error: {
                            code: 7,
                            message: 'This e-mail already exists'
                        }
                    });
                }
                else {
                    let newUser = new User(newUserData)
                    newUser.save((err, user) => {
                        if (err) {
                            res.status(500)
                            res.json({
                                error: {
                                    code: 0,
                                    message: 'Mongoose Server Error on save',
                                    err
                                }
                            })
                        } else {
                            res.status(200)
                            res.json({
                                error: {
                                    code: 6,
                                    message: 'Registred! Wait until email confirmation! thanks!'
                                }
                            })
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
    function put(req, res) {
        if (req.body && req.body._id) {
            let query = { _id: req.body._id }
            User.findOne(query, (err, success) => {
                if (err) {
                    res.status(500)
                    res.json({
                        error: {
                            code: 0,
                            message: 'Mongoose Server Error on save',
                            err
                        }
                    })
                } else {
                    success.user_fav_list = req.body.user_fav_list
                    success.save((error, done) => {
                        console.log(done)
                        if (error) {
                            console.log('somthing go wrong')
                        } else {
                            res.status(200)
                            res.json({
                                error: {
                                    code: 6,
                                    message: 'Fav list changed'
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

    return { post, put }
}
module.exports = registerControl