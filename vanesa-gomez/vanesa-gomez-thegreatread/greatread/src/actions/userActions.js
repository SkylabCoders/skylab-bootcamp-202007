import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function createUser(userData) {
    return axios.post('/api/users', userData).then((userData) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_USER,
            data: userData.data
        });
    });
}

export function loadUser(userId) {
    return axios.get(`/api/users/${userId}`).then((userData) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_USER,
            data: userData.data
        });
    });
}

export function favoriteBook(userSub, book) {
    const obj = { book };
    return axios.put(`/api/users/${userSub}`, obj).then((userData) => {
        dispatcher.dispatch({
            type: actionTypes.ADD_FAVORITE_BOOK,
            data: userData.data
        });
    });
}
