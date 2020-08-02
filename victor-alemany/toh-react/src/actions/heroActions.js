import heroListItem from "../hero.mock";
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes"

//action creator
export function loadHeroes(){
    return new Promise(resolve =>{
        resolve(heroListItem);
    }).then(heroListItem => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_HEROES,
            data: heroListItem
        })
    })
}

export function updateHero(name){
    return new Promise(resolve =>{
        resolve(heroListItem);
    }).then(hero => {
        dispatcher.dispatch({
            type: actionTypes.UPDATE_HERO,
            data: hero
        })
    })
}

export function getHero(){
    return new Promise(resolve =>{
        resolve(heroListItem);
    }).then(hero => {
        dispatcher.dispatch({
            type: actionTypes.GET_HERO,
            data: hero
        })
    })
}