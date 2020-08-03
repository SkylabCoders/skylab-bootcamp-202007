// import API?
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

export function loadChar() {
    return new Promise((resolve) => {
        resolve(listChar);
    }).then((characters) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_CHAR,
            data: characters
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
