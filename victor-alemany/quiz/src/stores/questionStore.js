import { EventEmitter } from 'events';
import dispatcher from './../AppDispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';

class QuestionStore extends React.Component{

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    getEmitter(){
        this.emit(CHANGE_EVENT);
    }

}

const questionStore = new QuestionStore();

export default questionStore;

dispatch.register((action) => {
    switch (action.type){
        default:
            break;
    }    
})

