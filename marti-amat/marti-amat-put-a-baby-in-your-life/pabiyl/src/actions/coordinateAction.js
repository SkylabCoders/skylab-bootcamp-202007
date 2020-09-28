import dispatcher from '../Dispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';
export function getCoordinates(city) {
    return axios.get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`).then((res) => {
        dispatcher.dispatch({
            type: actionTypes.GET_COORDINATES,
            data: res
        });
    });
}