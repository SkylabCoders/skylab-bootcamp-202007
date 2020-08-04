import actionTypes from './actionTypes';
import dispatcher from './../AppDispatcher';
import QUESTION_SESSION from './../mockdata/Questions';

export function loadQuestion(){
    let result = QUESTION_SESSION.results[0];

    dispatcher.dispatch({
        type: actionTypes.GET_QUESTION,
        data: result
    })
}