const express = require('express')
const debug = require('debug')('app:authRoutes')
const { MongoClient } = require('mongodb')

const authRoutes = express.Router()

function router(nav) {
    return authRoutes
}

module.exports = router