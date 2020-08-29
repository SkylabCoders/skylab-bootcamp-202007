const express = require('express');
const debug = require('debug')('app');
const mongoose =  require('mongoose')
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 4646;
const Hero = require('./models/heroModel');
const User = require('./models/userModel');
const Company = require('./models/companyModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/heroesAPI?retryWrites=true&w=majority');



app.get( '/', (req, res) => {
    res.send('my server works');
});

const heroRouter =  require( './src/routes/heroRouter')(Hero);

app.use('/api/heroes', heroRouter)

const usersRouter =  require( './src/routes/usersRouter')(User);

app.use('/users', usersRouter);

const companiesRouter =  require( './src/routes/companiesRouter')(Company);

app.use('/companies', companiesRouter);

app.listen(port, debug(`The server is running on port ${port}!!!`))