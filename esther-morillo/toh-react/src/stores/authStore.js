import EventEmitter from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';

// Todo es copy paste menos _isLogin y _userProfile que los creamos
let _isLogged = false;
let _userProfile = null;

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
}

const authStore = new AuthStore();

// Y ahora creamos los switch
dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            _isLogged = !!action.user;
            _userProfile = action.user;
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
})

export default authStore;
