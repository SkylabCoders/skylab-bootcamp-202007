const express = require('express')
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
const path = require('path')

const heroes = require('./heroes');

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', './src/views')
app.set('view engine', 'ejs')

const nav = [
    { link: '/', title: 'Dashboard' },
    { link: '/heroes', title: 'Heroes' },
    // { link: '/heroes/?heroId', title: 'Details' }

]


app.get('/', (req, res) => {
    res.render('dashboard', {
        nav,
        title: 'My Heroes',
        heroes: heroes.slice(0, 4)
    });
})

app.get('/heroes', (req, res) => {
    res.render('heroes', {
        nav,
        title: 'My Heroes',
        heroes
    })
})

app.get('/heroes/:heroId', (req, res) => {
    res.render('hero-detail', { nav, hero: heroes[0] })
})

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`))