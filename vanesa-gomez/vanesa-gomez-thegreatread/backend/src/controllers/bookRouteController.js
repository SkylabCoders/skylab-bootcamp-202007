const Book = require('../models/bookModel');
const axios = require('axios');

const googleApiPath = 'https://www.googleapis.com/books/v1/volumes?q=';
const idApiPath = `${googleApiPath}`;

function createBookModel(items) {
    const book = items && items[0];
    return (
        book && {
            id: book.id || '',
            title: book.volumeInfo.title || '',
            author: book.volumeInfo.authors
                ? book.volumeInfo.authors[0] || ''
                : '',
            averageRating: book.volumeInfo.averageRating || '3',
            image: book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail || ''
                : '',
            description: book.volumeInfo.description || '',
            editorial: book.volumeInfo.publisher || '',
            year: book.volumeInfo.publishedDate || '',
            isbn: book.volumeInfo.industryIdentifiers
                ? book.volumeInfo.industryIdentifiers[0].identifier || ''
                : '',
            genre: book.volumeInfo.categories
                ? book.volumeInfo.categories[0] || 'Fiction'
                : 'Fiction'
        }
    );
}

async function sendRequest(path) {
    return await axios
        .get(path)
        .then((response) => {
            return createBookModel(response.data.items || []);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function get(req, res) {
    const { bookId } = req.params;
    if (bookId) {
        const book = await sendRequest(`${idApiPath}${bookId}`);

        if (book) {
            res.status(200);
            return res.json(book);
        } else {
            res.status(204);
        }
    }
}

module.exports = { get };
