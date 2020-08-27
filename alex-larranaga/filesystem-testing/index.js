const express = require('express');

const { readdirSync } = require('fs');

const app = express();

const PORT = 4200;

app.get('/', (req, res) => {
	res.send('Server fookin running');
});

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
