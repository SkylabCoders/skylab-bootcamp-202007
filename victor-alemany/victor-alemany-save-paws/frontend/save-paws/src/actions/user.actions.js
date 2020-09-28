//import alertData from '../mocks/alerts.data.mock';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action.types';
import Axios from 'axios';

export function createUser(name,lastname,address,email,phone,city,user) {

    return Axios.post('/api/user/register',
    {
        name,
        lastname,
        address,
        email,
        phone,
        city,
        user:user.name,
        auth:user.sub,
        alerts:[]
    }).then((data) => {
		dispatcher.dispatch({
			type: actionTypes.CREATE_USER,
			data: data.data
        });
 
	})
}

export function updateUser(name,lastname,email,address,phone,city,userId) {

    return Axios.put(`/api/user/${userId}`,
    {
        name,
        lastname,
        email,
        address,
        phone,
        city

    }).then((data) => {
		dispatcher.dispatch({
			type: actionTypes.UPDATE_USER,
			data: data.data
        });
 
	})
}

export function loadUser(userId) {

    return Axios.get(`/api/user?id=${userId}`).then((user) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_USER,
			data: user.data
        });
 
	});
}