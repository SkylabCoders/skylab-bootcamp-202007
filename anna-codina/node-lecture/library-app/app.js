const express = require('express');
const path = require('path');
const VIEW_FOLDER = 'src/views';

const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});

app.get('/books', function (req, res) {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'boocks.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
