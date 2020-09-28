import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _users = [];
let coordinates = {};

class UserStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getDetailUsers() {

        return _users;
    }
    getDetailUserById(id) {


        return _users.find((user) => user._id === id);
    }
    getDetailUserByEmail(email) {
        return _users.find((user) => user.email === email);
    }
    isSaved() {
        return true;
    }


}

const userStore = new UserStore();

dispatcher.register((action) => {
    console.log("AQUEST ES EL ACTION", action);
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            _users = action.data;
            userStore.emitChange(_users);
            break;
        case actionTypes.LOAD_DETAIL_USER:
            _users = action.data;
            userStore.emitChange(_users);
            break;
        case actionTypes.CREATE_USER_DETAIL:
            userStore.emitChange(true);
            break;

        default: break;

    }

});

export default userStore;