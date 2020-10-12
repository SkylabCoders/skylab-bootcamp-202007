const express = require('express');
const debug = require('debug')('app:bookRoutes');

const bookRouteController = require('../controllers/bookRouteController');
const booksRouteController = require('../controllers/booksRouteController');

const bookRouter = express.Router();

function routes(Book) {
    const controller = booksRouteController(Book);
    bookRouter.route('/').get(controller.get);

    bookRouter.route('/:bookId').get(bookRouteController.get);

    return bookRouter;
}

module.exports = routes;
