import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function genreBooksSearch(query, subject) {
    let params = {
        params: { [subject]: query }
    };

    return axios.get('/api/books', params).then((books) => {
        dispatcher.dispatch({
            type: actionTypes.GENRE_BOOKS_SEARCH,
            data: books.data
        });
    });
}
