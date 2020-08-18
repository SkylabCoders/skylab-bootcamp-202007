const express = require('express')
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('dashboard works')
})

app.get('/heroes', (req, res) => {
    res.send('hero list works')
})

app.get('/heroes/:heroId', (req, res) => {
    res.send('hero detail works')
})

app.listen(port, () => debug(`listening on port ${chalk.green(port)}`))