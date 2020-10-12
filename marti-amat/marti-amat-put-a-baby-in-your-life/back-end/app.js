const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4200;
const cors = require('cors');

const UserDetail = require('./models/userModel');
const Email = require('./models/emailModel');

mongoose.connect('mongodb://localhost:27017/pabiyl');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('My server works!');
});

const userDetailRouter = require('./routes/userDetailRoutes')(UserDetail);
const emailRouter = require('./routes/emailRoutes')(Email);

app.use('/api/detailUser', userDetailRouter);
app.use('/api/email', emailRouter);
app.listen(port, debug(`Server is running at port ${port}`));