const express = require('express');
const debug = require('debug');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('tiny'));

app.set('views','./src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res)=>{
    res.render('dashboard');
});

app.get('/hero/:heroId', (req,res)=>{
    res.render('details');
});

app.get('/heroes', (req,res)=>{
    res.render('heroes');
});

app.listen(port, ()=> debug (`Listen on port ${chalk.green(port)}`))

