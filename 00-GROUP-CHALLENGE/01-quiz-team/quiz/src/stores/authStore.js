import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from './../actions/actionTypes';

const CHANGE_EVENT = 'change';
const _SESSION_DATA = {
    isLogged: false,
    userProfile: 'me@test.mail'
}

class AuthStore extends EventEmitter{

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    
    isLogged(){
        //console.log('STORE isLogged called from authStore with:', _SESSION_DATA.isLogged);
        return _SESSION_DATA.isLogged;
    }

    getUserProfile(){
        //console.log('STORE getUserProfile called from authStore with:', _SESSION_DATA.userProfile);
        return _SESSION_DATA.userProfile;
    }

}

const authStore = new AuthStore();

export default authStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.LOGIN:
            //console.log('STORE registering action from dispatcher: LOGIN with data:', action.data);
            _SESSION_DATA.userProfile = action.data;
            _SESSION_DATA.isLogged = !!action.data;
            authStore.emitChange();
            break;
        case actionTypes.LOGOUT:
            //console.log('STORE registering action from dispatcher: LOGOUT');
            _SESSION_DATA.isLogged = false;
            _SESSION_DATA.userProfile = '';
            authStore.emitChange();
            break;
        default:
            break;
    }    
})

