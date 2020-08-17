import actionTypes from './actionTypes';
import dispatcher from './../dispatcher';

export function loadQuestion(i){
    let result = i;

    dispatcher.dispatch({
        type: actionTypes.GET_QUESTION_FROM_SESSION,
        data: result
    })
}