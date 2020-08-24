const express = require('express');
const debug = require('debug')('app');

const app = express();
const { PORT: port } = process.env;

app.get('/', (req, res) => {
	res.send('My server works!');
});

app.listen(port, debug(`Server is running at port ${port}...`));
