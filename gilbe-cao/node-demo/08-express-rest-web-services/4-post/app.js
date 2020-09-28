const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const Hero = require('./models/heroModel');
const heroRouter = require('./routes/heroRouter')(Hero);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', heroRouter);

app.get('/', (req, res) => {
	res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
