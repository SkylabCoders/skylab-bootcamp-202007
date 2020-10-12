import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';



export function loadDetails() {

    return axios.get('/api/detailUser/').then((detailUsers) => {

        dispatcher.dispatch({
            type: actionTypes.LOAD_DETAIL_USER,
            data: detailUsers.data
        });
    });
}

export function saveUser(user) {
    return axios.post('/api/detailUser', user).then((savedUser) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_USER_DETAIL,
            data: savedUser
        });
    });
}
export function updateUser(user) {
    return axios.put(`/api/detailUser/${user._id}`, user).then((updatedUser) => {
        dispatcher.dispatch({
            type: actionTypes.UPDATE_USER_DETAIL,
            data: updatedUser
        });
    });
}





