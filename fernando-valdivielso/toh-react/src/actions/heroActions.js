import heroList from '../heroData';
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadHeroes() {
    return new Promise((resolve) => {    //simula llamada a API
        resolve(heroList);
    }).then((heroes) => {
        dispatcher.dispatch({          //dispatcher, ahi tienes una accion
            type: actionTypes.LOAD_HERO,
            data: heroes,
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
    return new Promise((resolve) => {
        resolve();
    }).then((hero) => {
        dispatcher.dispatch({
            type: actionTypes.DELETE_HERO,
            data: { id },
        });
    });
}





