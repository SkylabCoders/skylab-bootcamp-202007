const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const Store = require('./src/models/storeModel');
const Product = require('./src/models/productModel');
const User = require('./src/models/userModel');

const db = mongoose.connect('mongodb://localhost/petitComerc');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('My server works...');
});

app.listen(port, () => debug(`Listener on port ${port}`));

const storeRoutes = require('./src/routes/storeRoutes')(Store, User);

app.use('/api/stores', storeRoutes);

const productRoutes = require('./src/routes/productRoutes')(Product, Store, User);

app.use('/api/products', productRoutes);

const userRoutes = require('./src/routes/userRoutes.js')(User);

app.use('/api/users', userRoutes);