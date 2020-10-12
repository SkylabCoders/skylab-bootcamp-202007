const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('index');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const mongoose = require('mongoose');

const Entry = require('./models/detailModel');
const User = require('./models/userModel');
const Comment = require('./models/commentModel')

const entryRouter = require('./routes/entryRouter');

const app = express();
const PORT = 4200;
mongoose.connect('mongodb+srv://gaeremtro:49Chocsak.@hireddb.liatz.gcp.mongodb.net/skylab-hired?retryWrites=true&w=majority')

app.use(cookieParser());
app.use(expressSession({ secret: 'hired' }));

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));





// app.set('views', './src/views')
// app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'access-token, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

app.use('/', entryRouter(User));
app.use('/api', entryRouter(Entry));
app.use('/info', entryRouter(Comment));

app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));
