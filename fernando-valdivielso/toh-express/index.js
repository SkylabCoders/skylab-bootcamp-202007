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
const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes); // esta const apunta al resultado de la funcion router en heroRoutes.js pasandole los parametros nav y heroes

app.use('/heroes', heroRoutes)

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`))