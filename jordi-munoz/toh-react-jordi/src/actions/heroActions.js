
import heroListArray from "../hero.mock"
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export function loadHeroes() {
    return new Promise((resolve) => {
        resolve(heroListArray);
    }).then((heroes) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_HEROES,
            data: heroes
        });
    });
}

export function crateHero(hero) {
    return new Promise((resolve) => {
        const hero = {
            name: 'Gilber',
            id: 99
        }

        resolve(hero)
    }).then((hero) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_HERO,
            date: hero
        });
    });
}