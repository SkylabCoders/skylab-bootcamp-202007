const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const app = express();
const port = 3100;

const config = {
    user: 'hydroFlask',
    password: 'Skylab123',
    server: 'dfkylab.database.windows.net',
    database: 'Tour Of Skylabers',
    option: {
        encrypt: true
    }
}

sql.connect(config).catch(debug);

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
    { link: '/', title: 'Dashboard' },
    { link: '/skylabers', title: 'Skylabers' }
]

const skylaberRoutes = require('./src/routes/skylaberRoutes')(nav);


app.use('/', skylaberRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.magenta(port)}`));