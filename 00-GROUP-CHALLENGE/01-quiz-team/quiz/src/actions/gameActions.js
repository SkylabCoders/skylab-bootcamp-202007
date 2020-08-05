import actionTypes from './actionTypes';
import dispatcher from './../AppDispatcher';
import THEMES_LIST from './../mockdata/Themes';
import getApiData from './../api';

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

export async function loadSessionSet(){
    let result =  await getApiData(22,'all','all','default',12);
    console.log('action has received following data form API:', await result);
    
    dispatcher.dispatch({
        type: actionTypes.GET_SESSION_SET,
        data: await result
    })
}