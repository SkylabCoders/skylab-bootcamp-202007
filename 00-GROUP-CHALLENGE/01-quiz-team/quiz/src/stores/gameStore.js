import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _themes_list = [];
let _top_themes_list = [];
let _session_set = [];
let _index = undefined;

class GameStore extends EventEmitter{

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getThemes(){
        return _themes_list;
    }

    getTopThemes(){
        return _top_themes_list;
    }

    getSessionSet(){
        return _session_set;
    }

    getQuestion(index){
        return _session_set[index];
    }

}

const gameStore = new GameStore();

export default gameStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.GET_THEMES:
            _themes_list = action.data;
            gameStore.emitChange(_themes_list);
            break;
        case actionTypes.GET_TOP_THEMES:
            _top_themes_list = action.data;
            gameStore.emitChange(_top_themes_list);
            break;
        case actionTypes.GET_SESSION_SET:
            _session_set = action.data;
            gameStore.emitChange(_session_set);
            break;
        case actionTypes.GET_QUESTION_FROM_SESSION:
            _index = action.data;
            gameStore.emitChange(_index);
            break;
        default:
            break;
    }    
})

