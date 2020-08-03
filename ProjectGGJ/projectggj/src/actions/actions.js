import charList from '../mock.chars';
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";


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
