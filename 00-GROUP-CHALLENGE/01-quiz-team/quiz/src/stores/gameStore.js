import { EventEmitter } from 'events';
import dispatcher from './../AppDispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';

let _themes_list = [];
let _top_themes_list = [];

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

}

const gameStore = new GameStore();

export default gameStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.GET_THEMES:
            _themes_list = action.data;
            gameStore.emitChange(_themes_list);
        case actionTypes.GET_TOP_THEMES:
            _top_themes_list = action.data;
            gameStore.emitChange(_top_themes_list);
        default:
            break;
    }    
})

