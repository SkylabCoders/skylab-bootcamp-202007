import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';



export function loadEmails() {

    return axios.get('/api/email/').then((emails) => {

        dispatcher.dispatch({
            type: actionTypes.LOAD_EMAIL,
            data: emails.data
        });
    });
}

export function saveEmail(email) {
    return axios.post('/api/email', email).then((savedEmail) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_EMAIL,
            data: savedEmail
        });
    });
}
