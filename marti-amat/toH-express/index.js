const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views')
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('dashboard')
});


app.get('/heroes', (req, res) => {
    res.render('heroes')
});


app.get('/hero/:heroId', (req, res) => {
    res.render('hero-details')
});

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));