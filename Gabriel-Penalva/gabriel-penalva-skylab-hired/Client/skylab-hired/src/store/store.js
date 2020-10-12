/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher'
import actionTypes from '../actions/actionTypes';
// eslint-disable-next-line import/no-named-as-default
import errorsHandle from '../errors/errorsHandle';

const CHANGE_EVENT = 'change';
let detail = [];
let userEntriesDetail = [];
let register = false;
let newMessage = false;
let comments = [];
let newComment = false

class DBStore extends EventEmitter {


    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getDetail() {
        return detail;
    }

    getUser() {
        return JSON.parse(global.sessionStorage.getItem('user'));
    }
    setUser(user) {
        global.sessionStorage.removeItem('user');
        global.sessionStorage.setItem('user', JSON.stringify(user))
    }



    getEntriesDetail() {
        return userEntriesDetail;
    }
    getOneEntry(id) {
        const ent = detail.find((current) => id === current._id)
        return ent
    }
    getUserComments(entry) {
        const add = entry.entryCommentList

        const aff = add.reduce((acc, current) => {
            if (comments.length !== 0) {
                const comment = comments.find((curr) => curr._id === current)
                if (comment) {
                    return [...acc, comment]
                }
            }
            return acc
        }, [])

        return aff
    }
    isNewComment() {
        if (newComment) {
            newComment = false;
            return true;
        }
        return false;
    }


    logout() {
        global.sessionStorage.removeItem('user');
        global.sessionStorage.removeItem('access-token');
        this.emitChange();
    }
    setMessage(message) {
        newMessage = errorsHandle({ error: { code: 3, message } })
    }

    getMessage() {
        this.unSetMessage()
        return newMessage;
    }
    unSetMessage() {
        if (newMessage) {

            setTimeout(() => {
                newMessage = false
                this.emitChange()
            }, 2500)
        }

    }
    getRegister() {
        return register
    }
    setRegister() {
        register = false;
    }

}

const store = new DBStore();
dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_DETAIL:
            detail = action.data;
            store.emitChange();
            break;
        case actionTypes.LOGIN:
            global.sessionStorage.setItem('user', JSON.stringify(action.data.user))
            newMessage = errorsHandle({ error: { code: 5, message: action.data.message } })
            store.emitChange();
            break;
        case actionTypes.REGISTER:
            register = true;
            newMessage = errorsHandle(action.data)
            store.emitChange();
            break;
        case actionTypes.LOAD_ENTRIES:
            userEntriesDetail = action.data
            store.emitChange()
            break;
        case actionTypes.LOAD_COMMENTS:
            comments = action.data
            store.emitChange();
            break;
        case actionTypes.ADD_COMMENT:
            newComment = true;
            newMessage = errorsHandle(action.data);
            store.emitChange();
            break;
        case actionTypes.ERROR:
        case actionTypes.EDIT_USER:
        case actionTypes.ADD_ENTRY:
            newMessage = errorsHandle(action.data);
            store.emitChange();
            break;

        default:
            break;
    }
});

export default store;
