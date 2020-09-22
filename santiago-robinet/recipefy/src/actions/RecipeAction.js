import dispatcher from "../Dispatcher";
import actionTypes from "./actionTypes";


export function loadRecipe(){
    return new Promise ((resolve) => {
        resolve(/*TO DO*/)
    }).then((/*TO DO*/) => {
        dispatcher.dispatch({
            type: actionTypes.LOAD_RECIPE,
            data: null/*TO DO*/
        });
    });
}


export function updateRecipe(){
    return new Promise ((resolve) => {
        resolve(/*TO DO*/)
    }).then((/*TO DO*/) => {
        dispatcher.dispatch({
            type: actionTypes.UPDATE_RECIPE,
            data: null/*TO DO*/
        });
    });
}