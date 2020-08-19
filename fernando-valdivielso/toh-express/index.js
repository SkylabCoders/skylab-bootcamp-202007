<<<<<<< HEAD
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
    res.render('dashboard')
})

app.get('/heroes', (req, res) => {
    res.render('heroes')
})

app.get('/heroes/:heroId', (req, res) => {
    res.render('hero-detail')
})

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`))
=======
const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const heroes = require('./heroes');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

const config = {                        // database config
    user: 'hydroFlask',
    password: 'Skylab123',              // el password no se envia al cliente, porque no está en render
    server: 'dfkylab.database.windows.net',
    database: 'ToH-db',
    option: {
        encrypt: true  // because we are using MS Azure
    }
}

sql.connect(config).catch(debug)

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', './src/views')
app.set('view engine', 'ejs')

const nav = [
    { link: '/', title: 'Dashboard' },
    { link: '/heroes', title: 'Heroes' }
]


app.get('/', (req, res) => {
    res.render('dashboard', {
        nav,
        title: 'My Heroes',
        heroes: heroes.slice(0, 4)
    });
})
const heroRoutes = require('./src/routes/heroRoutes')(nav); // esta const apunta al resultado de la funcion router en heroRoutes.js pasandole los parametros nav y heroes

app.use('/heroes', heroRoutes)

app.listen(port, () => debug(`listening on port ${chalk.magenta(port)}`))

>>>>>>> f7ee19b91ed651183f6bb0ec89b7dd87ca898812
