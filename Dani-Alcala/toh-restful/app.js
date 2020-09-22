const express = require('express');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;
const Hero = require('./src/models/heroModel');
const User = require('./src/models/userModel');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// const db = mongoose.connect('mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/heroesAPI?retryWrites=true&w=majority');
// const db = mongoose.connect('mongodb://localhost/usersAPI');
const db = mongoose.connect('mongodb://localhost/heroesAPI');

app.get('/', (req, res) => {
	res.send('My server is running');
});

const heroRouter = require('./src/routes/heroRouter')(Hero)
const userRouter = require('./src/routes/userRouter')(User)

app.use('/api/heroes', heroRouter)
app.use('/api/users', userRouter)

app.listen(port, () => debug(`running on port ${port}`));
