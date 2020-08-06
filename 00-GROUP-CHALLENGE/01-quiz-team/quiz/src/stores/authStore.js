<<<<<<< HEAD
import  {EventEmitter} from 'events'
import actionTypes from './../actions/actionTypes'
import dispatcher from '../AppDispatcher';

const CHANGE_EVENT = 'change';
let _isLogged = false;
let _userProfile = null;
class AuthStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT,callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT,callback)
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    isLogged(){
        return _isLogged;
    }

    getUserProfile(){
        return _userProfile;
=======
import { EventEmitter } from 'events';
import dispatcher from './../AppDispatcher';
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
        console.log('STORE emitting Event');
        this.emit(CHANGE_EVENT);
    }
    
    isLogged(){
        console.log('STORE isLogged called from authStore with:', _SESSION_DATA.isLogged);
        return _SESSION_DATA.isLogged;
    }

    getUserProfile(){
        console.log('STORE getUserProfile called from authStore with:', _SESSION_DATA.userProfile);
        return _SESSION_DATA.userProfile;
>>>>>>> f29ec03621641ad5dd945f1546cf5ba63e6060f2
    }

}

const authStore = new AuthStore();

<<<<<<< HEAD
dispatcher.register((action)=>{
    switch(action.type){
        case actionTypes.LOGIN:
        _userProfile = action.data;
        _isLogged = !!action.data
        authStore.emitChange();
        break;
        case actionTypes.LOGOUT:
        _isLogged = false;
        _userProfile = null;
        authStore.emitChange();
        break;
        default:
        break;
    }
});

export default authStore;
=======
export default authStore;

dispatcher.register((action) => {
    switch (action.type){
        case actionTypes.LOGIN:
            console.log('STORE registering action from dispatcher: LOGIN with data:', action.data);
            _SESSION_DATA.userProfile = action.data;
            _SESSION_DATA.isLogged = !!action.data;
            authStore.emitChange();
            break;
        case actionTypes.LOGOUT:
            console.log('STORE registering action from dispatcher: LOGOUT');
            _SESSION_DATA.isLogged = false;
            _SESSION_DATA.userProfile = '';
            authStore.emitChange();
            break;
        default:
            break;
    }    
})
>>>>>>> f29ec03621641ad5dd945f1546cf5ba63e6060f2

