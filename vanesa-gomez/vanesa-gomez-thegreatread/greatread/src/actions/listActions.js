import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadBookList(query) {
    return axios
        .get('/api/books', {
            params: {
                title: query
            }
        })
        .then((book) => {
            dispatcher.dispatch({
                type: actionTypes.LOAD_BOOK_LIST,
                data: book.data
            });
        });
}

export function loadBookById(id) {
    return axios.get(`/api/books/${id}`).then((book) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_BOOK,
            data: book.data
        });
    });
}
