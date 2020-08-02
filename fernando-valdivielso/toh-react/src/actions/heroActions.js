import heroList from '../heroData';
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadHeroes() {
    return new Promise(resolve => {    //simula llamada a API
        resolve(heroList)
    }).then(heroes => {
        dispatcher.dispatch({          //dispatcher, ahi tienes una accion
            type: actionTypes.LOAD_HERO,
            data: heroes,
        });
    })
}

export function createHero(hero) {
    return new Promise((resolve) => {
        const hero = {
            name: 'Gilbe',
            id: 99
        };

        resolve({ hero })
    }).then(hero => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_HERO,
            data: hero
        });
    });
}

