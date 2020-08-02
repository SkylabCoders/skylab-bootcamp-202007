import heroData from "../heroData";
import dispatcher from '../appDispatcher'
import actionTypes from './actionTypes'


export function loadHeroes() {
    return new Promise((resolve) => {
        resolve(heroData);
    }).then(heroes => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_HERO,
            data: heroes
        })
    })
}
/* 
export function createHeroes(hero) {
    return new Promise((resolve) => {
        const hero = {
            name: 'Gilber',
            id: 99
        }
        resolve(hero);
    }).then((hero) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_HERO,
            data: hero
        });
    });
} */

export function savedHero(hero) {
    return new Promise((resolve) => {
        resolve(hero);
    }).then((savedHero) => {
        dispatcher.dispatch({
            type: hero.id ? actionTypes.UPDATE_HERO : actionTypes.CREATE_HERO,
            data: savedHero
        });
    });
}

export function deleteHero(hero) {
    return new Promise((resolve) => {
        resolve(hero);
    }).then((deleteHero) => {
        dispatcher.dispatch({
            type: actionTypes.DELETE_HERO,
            data: { hero }
        });
    });
}

//data de deleteHero es diferent