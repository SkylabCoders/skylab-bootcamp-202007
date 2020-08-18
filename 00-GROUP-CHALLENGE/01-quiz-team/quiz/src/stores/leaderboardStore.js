import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from './../actions/actionTypes';
import sortResults from './../utils/sortResults'

const CHANGE_EVENT = 'change';
let _leaderboard = [];

class LeaderboardStore extends EventEmitter{

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getLeaderboard(){
        return _leaderboard;
    }

}

const leaderboardStore = new LeaderboardStore();

export default leaderboardStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.GET_LEADERBOARD:
            _leaderboard = action.data;
            leaderboardStore.emitChange(_leaderboard);
            break;
        case actionTypes.ADD_RESULTS:
            _leaderboard = [..._leaderboard,{...action.data}];
            leaderboardStore.emitChange(sortResults(_leaderboard));
            break;
        default:
            break;
    }    
})


