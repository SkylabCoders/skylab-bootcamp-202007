import heroList from "../hero.mock"
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function loadHeros() {
    return new Promise((resolve) => {
        resolve(heroList);
    }).then(heros => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_HEROES,
            data: heros
        })
    })
}

export function createHero(hero) {
    return new Promise(resolve => {
        const hero = {
            name: 'gabriel',
            id: 29
        }
        resolve(hero)
    }).then(hero => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_HERO,
            data: hero
        })
    })
}