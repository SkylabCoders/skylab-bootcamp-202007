import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';

class UserStore extends EventEmitter{

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

const userStore = new UserStore();

export default userStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.GET_USER_DATA:
            console.log('GET_USER_DATA ACTION ENTERING IN USER STORE');
            userStore.emitChange();
            break; 
        case actionTypes.UPDATE_USER_DATA:
            console.log('UPDATE_USER_DATA ACTION ENTERING IN USER STORE');
            userStore.emitChange();
            break; 
        default:
            break;
    }    
})

