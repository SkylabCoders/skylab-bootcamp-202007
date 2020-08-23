const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const nav = [
	{ link: '/user/products', title: 'Products' },
	{ link: '/user/cart', title: 'Shopping Cart' },
	{ link: '/db/insertCart', title: 'InsertCart' }
];

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));

require('./src/config/passport')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('Hi I work');
});

const dbRoutes = require('./src/routes/dbRoutes')(nav);
app.use('/db', dbRoutes);

const appRoute = require('./src/routes/appRoute')(nav);
app.use('/user', appRoute);

const authRoutes = require('./src/routes/authRoutes')(nav);
app.use('/auth', authRoutes);

const adminRoutes = require('./src/routes/adminRoutes')(nav);
app.use('/admin', adminRoutes);

app.listen(port, () => debug(`Listening on port ${chalk.green(port)}`));
