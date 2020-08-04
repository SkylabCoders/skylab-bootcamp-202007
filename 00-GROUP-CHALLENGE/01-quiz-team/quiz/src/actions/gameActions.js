import actionTypes from './actionTypes';
import dispatcher from './../AppDispatcher';
import THEMES_LIST from './../mockdata/Themes';

export function loadThemes(){
    let result = THEMES_LIST

    dispatcher.dispatch({
        type: actionTypes.GET_THEMES,
        data: result
    })
}

export function loadTopThemes(){
    let result = THEMES_LIST.slice(0,5);
    
    dispatcher.dispatch({
        type: actionTypes.GET_TOP_THEMES,
        data: result
    })
}