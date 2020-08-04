import charList from '../mock.chars';
import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import planetsArr from '../mock.Planets';


export function loadCharList() {
    return new Promise((resolve) => {
        resolve(charList);
    }).then((charList) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_CHAR_LIST,
            data: charList
        });
    });
}

export function saveUser(user) {
    return new Promise((resolve) => {
        resolve(user);
    }).then((savedUser) => {
        dispatcher.dispatch({
            type: (user ? actionTypes.CREATE_PROFILE : actionTypes.UPDATE_PROFILE),
            data: savedUser
        })
    })
}

export function loadPlanets() {
    return new Promise((resolve) => {
        resolve(planetsArr);
    }).then((planetsArr) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_PLANETS,
            data: planetsArr
        });
    });
}

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
