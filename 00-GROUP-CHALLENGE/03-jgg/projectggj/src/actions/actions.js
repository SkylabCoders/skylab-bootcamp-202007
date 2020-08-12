import charList from '../mock.chars';
import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import mockPlanets from '../mockPlanets';
import mockSagasList from '../mockSagasList';

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
	}).then((list) => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_CHAR_LIST,
			data: {
				charList: list,
				filter,
				name
			}
		});
	});
}

export function loadSagaList() {
	return new Promise((resolve) => {
		resolve(mockSagasList);
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_SAGA_LIST,
			data: mockSagasList
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

export function loadPlanets() {
	return new Promise((resolve) => {
		resolve(mockPlanets);
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOAD_PLANETS,
			data: mockPlanets
		});
	});
}
export function winIncrement() {
	return new Promise((resolve) => {
		resolve();
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.WIN_INC
		})
	})
}
export function lossIncrement() {
	return new Promise((resolve) => {
		resolve();
	}).then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOSS_INC
		})
	})
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

    }).then((mockPlanets) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_PLANETS,
            data: mockPlanets
        });
    });
} */
