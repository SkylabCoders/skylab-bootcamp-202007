import { EventEmitter } from 'events';
import dispatcher from './../AppDispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';

class QuestionStore extends EventEmitter{

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

}

const questionStore = new QuestionStore();

export default questionStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.GET_QUESTION_ANSWER:
            _themes_list = action.data;
            gameStore.emitChange(_themes_list);
            break;
        case actionTypes.GET_QUESTION_OPTIONS:
            _themes_list = action.data;
            gameStore.emitChange(_themes_list);
            break;
        case actionTypes.GET_QUESTION_TITLE:
            _themes_list = action.data;
            gameStore.emitChange(_themes_list);
            break;
        case actionTypes.GET_QUESTION_RESULT:
            _themes_list = action.data;
            gameStore.emitChange(_themes_list);
            break;
        default:
            break;
    }    
})

