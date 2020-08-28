import axios from 'axios';
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadHeroes() {
    return axios.get('/api/heroes').then((heroes) => {
        dispatcher.dispatch({          //dispatcher, ahi tienes una accion
            type: actionTypes.LOAD_HERO,
            data: heroes.data
        });
    });
}

export function saveHero(hero) {
    return new Promise((resolve) => {
        resolve(hero);
    }).then((savedHero) => {
        dispatcher.dispatch({
            type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
            data: savedHero,
        });
    });
}

export function deleteHero(id) {
    return axios.delete(`/api/heroes/${id}`).then(() => {
        dispatcher.dispatch({
            type: actionTypes.DELETE_HERO,
            data: id
        });
    });
}





