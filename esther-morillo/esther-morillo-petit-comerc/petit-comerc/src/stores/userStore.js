import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _user = null;

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

    getUser() {
        return _user;
    }
}

const userStore = new UserStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_USER:
            _user = action.data;
            userStore.emitChange();
            break;
        case actionTypes.ADD_CART:
            _user = action.data;
            if(_user) {
                _user.cart = action.data.cart;
            }
            userStore.emitChange();
            break;
        default:
            break;
    }
});

export default userStore;