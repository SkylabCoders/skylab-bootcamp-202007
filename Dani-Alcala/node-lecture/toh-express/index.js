const express = require('express')
const debug = require('debug')('app')
const chalk = require('chalk')
const morgan = require('morgan')
const path = require('path')

const app = express()
const port = 3000

app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('dashboard', {title: 'Top Heroes'})
})

app.get('/heroes', (req, res) => {
    res.render('heroes', {title: 'My Heroes', heroes: [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ]
    })
})

app.get('/heroes/:heroId', (req, res) => {
    res.render('hero-detail')
})

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`))