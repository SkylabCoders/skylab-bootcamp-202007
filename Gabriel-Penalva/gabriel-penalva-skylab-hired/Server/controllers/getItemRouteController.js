const User = require('../models/userModel');

function getItemApi(Item) {
    function get(req, res) {
        const query = {};
        Item.find(query, (error, detail) => {
            if (error) res.send(error);

            res.json(detail);
        })
    }
    function post(req, res) {

        let newEntryData

        if (req.body && req.body.speciality && req.body.category && req.body.content && req.body.company && req.body.difficulty && req.body.userId) {
            let query = { _id: req.body.userId }
            newEntryData = {
                isQuestion: req.body.isQuestion,
                description: req.body.content,
                entryRating: req.body.difficulty,
                entryCommentList: [],
                entryPopularity: 0,
                companyId: req.body.company,
                haveFile: false,
                isFrontend: false,
                isBackend: false,
                isFullstack: false,
                isJunior: false,
                isSenior: false
            }
            switch (req.body.speciality) {
                case 'fullstack':
                    newEntryData.isFullstack = true
                    break;
                case 'frontend':
                    newEntryData.isFrontend = true
                    break;
                case 'backend':
                    newEntryData.isBackend = true
                    break;
                default:
                    console.log(req.body.speciality)
                    break;
            }
            if (req.body.category === 'junior')
                newEntryData.isJunior = true;
            else
                newEntryData.isSenior = true;

            let newEntry = new Item(newEntryData)
            newEntry.save((err, entry) => {

                if (err) {
                    res.status(500)
                    res.json({
                        error: {
                            code: 0,
                            message: 'Mongoose Server Error on save'

                        }
                    })
                } else {
                    User.findOneAndUpdate(query, { $push: { user_entries_list: entry._id } }, (error, success) => {
                        if (error) {
                            res.status(500)
                            res.json({
                                user: success,
                                error: {
                                    code: 0,
                                    message: 'Mongoose Server Error add entry to user list',
                                    error
                                }
                            });
                        } else {
                            res.status(200)
                            res.json({
                                error: {
                                    code: 6,
                                    message: 'New entry created Successfully! Thank YOU!'
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
                    message: 'Incorrect params Request.'
                }
            });
        }

    }
    function patch(req, res) {
        if (req.body && req.body._id) {
            let query = { _id: req.body._id }
            Item.findOne(query, (err, success) => {
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
                    success.entryPopularity = ++success.entryPopularity
                    success.save((error, done) => {
                        console.log(done)
                        if (error) {
                            console.log('somthing go wrong')
                        } else {
                            res.status(200)
                            res.json({
                                error: {
                                    code: 6,
                                    message: 'Added Popularity'
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
    return { get, post, patch }
}

module.exports = getItemApi