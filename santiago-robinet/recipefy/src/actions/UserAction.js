import dispatcher from "../Dispatcher";
import actionTypes from "./actionTypes";

export function createUser(){
    return new Promise ((resolve) => {
        resolve(/*TO DO*/)
    }).then((/*TO DO*/) => {
        dispatcher.dispatch({
            type: actionTypes.CREATE_USER,
            data: null/*TO DO*/
        });
    });
}

export function updateUser(){
    return new Promise ((resolve) => {
        resolve(/*TO DO*/)
    }).then((/*TO DO*/) => {
        dispatcher.dispatch({
            type: actionTypes.UPDATE_USER,
            data: null/*TO DO*/
        });
    });
}



