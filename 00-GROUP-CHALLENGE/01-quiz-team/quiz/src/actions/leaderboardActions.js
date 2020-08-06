import actionTypes from './actionTypes';
import dispatcher from './../AppDispatcher';
import LEADERBOARD from './../mockdata/Leaderboard';

export function loadLeaderboard(){
    let result = LEADERBOARD;

    dispatcher.dispatch({
        type: actionTypes.GET_LEADERBOARD,
        data: result
    })
}