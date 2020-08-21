import EventEmitter from 'events';
import actionTypes from '../actions/actionTypes';
import dispatcher from '../appDispatcher';

const CHANGE_EVENT = 'change';
let _isLogged = false;
let _userProfile = null;
let _userName = false;
let _photoUser = null;

class AuthStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    isLogged() {
        return _isLogged;
    }
    getUserProfile() {
        return _userProfile;
    }
    getUserName() {
        return _userName;
    }
    getUserPhoto() {
        return _photoUser;
    }
}

const authStore = new AuthStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            _userProfile = action.data;
            _isLogged = !!action.data;
            _userName = action.data.user.displayName;
            _photoUser = action.data.user.photoURL;
            authStore.emitChange();
            break;
        case actionTypes.LOGOUT:
            _isLogged = false;
            _userProfile = null;
            authStore.emitChange();
            break;

        //CREATE.PROFILE doesn't need any data because is not sending anything, in fact you don't have to add any
        case actionTypes.CREATE_PROFILE:
            _userProfile = action.data;
            authStore.emitChange();
            break;
        default:
            return (`Action not recognized: ${action.type}`);
    }
});

export default authStore;
