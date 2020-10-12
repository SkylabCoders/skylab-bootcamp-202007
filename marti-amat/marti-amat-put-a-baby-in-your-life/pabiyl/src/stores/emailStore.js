import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _emails = [];


class EmailStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getEmails() {

        return _emails;
    }
    getEmailById(id) {


        return _emails.find((email) => email._id === id);
    }
    getEmailsByReceptor(email) {
        return _emails.filter((receptor) => receptor.receptor === email);
    }


}

const emailStore = new EmailStore();

dispatcher.register((action) => {
    console.log("AQUEST ES EL ACTION", action);
    switch (action.type) {
        case actionTypes.LOAD_EMAILS:
            _emails = action.data;
            emailStore.emitChange(_emails);
            break;
        case actionTypes.LOAD_EMAIL:
            _emails = action.data;
            emailStore.emitChange(_emails);
            break;
        case actionTypes.CREATE_EMAIL:
            emailStore.emitChange(true);
            break;

        default: break;

    }

});

export default emailStore;