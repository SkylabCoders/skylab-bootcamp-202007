import heroData from '../heroData';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import axios from 'axios';

export function loadHeroes() {
	return axios.get('/api/heroes').then((heroes) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_HERO,
			data: heroes.data
		});
	});
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

export function deleteHero(id) {
	return new Promise((resolve) => {
		resolve();
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.DELETE_HERO,
			data: { id }
		});
	});
}

//data de deleteHero es diferent
