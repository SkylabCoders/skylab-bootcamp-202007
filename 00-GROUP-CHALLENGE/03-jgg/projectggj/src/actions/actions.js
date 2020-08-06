import charList from '../mock.chars';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import planetsArr from '../mock.Planets';
import sagaList from '../mock.sagas';

export function globalSearch(text, filter, name) {
	dispatcher.dispatch({
		type: actionTypes.GLOBAL_SEARCH,
		data: {
			text,
			filter,
			name
		}
	});
}

export function loadCharList(filter, name) {
	return new Promise((resolve) => {
		resolve(charList);
	}).then((charList) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_CHAR_LIST,
			data: {
				charList,
				filter,
				name
			}
		});
	});
}

export function loadSagaList() {
	return new Promise((resolve) => {
		resolve(sagaList);
	}).then((sagaList) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_SAGA_LIST,
			data: sagaList
		});
	});
}

export function saveUser(user) {
	return new Promise((resolve) => {
		resolve(user);
	}).then((savedUser) => {
		dispatcher.dispatch({
			type: user ? actionTypes.CREATE_PROFILE : actionTypes.UPDATE_PROFILE,
			data: savedUser
		});
	});
}

export function loadPlanets(filter, name) {
	return new Promise((resolve) => {
		resolve(planetsArr);
	}).then((planetsArr) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_PLANETS,
			data: planetsArr
		});
	});
}

/* export function loadCharListAPI() {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        var filter = 'character';
                req.open('GET', `https://dragon-ball-api.herokuapp.com/api/${filter}/`, true);
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    resolve(JSON.parse(req.responseText));
                }
                else
                    reject("Error loading page\n");
            }
        };
        req.send(null);
    }).then((character_list) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_CHAR_LIST,
            data: character_list
        });
    });
} */

/* export function loadPlanets() {
    return new Promise((resolve, reject) => {

        let req = new XMLHttpRequest();
        var filter = 'planet';
        req.open('GET', `http://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api/${filter}/`, true);
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    resolve(JSON.parse(req.responseText));
                }
                else
                    reject("Error loading page\n");
            }
        };
        req.send(null);

    }).then((planetsArr) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_PLANETS,
            data: planetsArr
        });
    });
} */
