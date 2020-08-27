const express = require('express');
const { readdirSync } = require('fs');

const app = express();
const port = 1312;

app.get('/', (req, res) => {
	res.send('Server is working');
});

app.listen(port);
