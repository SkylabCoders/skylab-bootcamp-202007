import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _question = {};

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

    getQuestion(){
        return _question;
    }

}

const questionStore = new QuestionStore();

export default questionStore;

dispatcher.register((action) => {
    if(action.type === actionTypes.GET_QUESTION){
        _question = action.data;
        questionStore.emitChange(_question);
    }    
})

