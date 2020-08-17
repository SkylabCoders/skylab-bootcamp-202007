const express = require('express');
const path = require('path');

const app = express();

const VIEW_FOLDER = 'src/views';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});

app.get('/books', (req, res) => {
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'books.html'));
});

const PORT = 2427;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
