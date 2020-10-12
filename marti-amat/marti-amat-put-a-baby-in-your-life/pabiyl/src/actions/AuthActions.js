import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

function myDispatch(actualActionType, actualData) {
    return dispatcher.dispatch({
        type: actualActionType,
        data: actualData
    });
}

function logoutDispatch(actualActionType) {
    return dispatcher.dispatch({
        type: actualActionType
    });
}

export async function login(email, password) {
    try {
        const emailUser = await authMethods.signin(email, password);
        const action = myDispatch(actionTypes.LOGIN, emailUser);
        return action;
    } catch (error) {
        throw 'Error in loggin process';
    }
}

export async function logout() {
    await authMethods.signout();
    const action = logoutDispatch(actionTypes.LOGOUT);
    return action;
}

export async function googleLogin() {
    try {
        const googleUser = await authMethods.signInWithGoogle();
        const action = myDispatch(actionTypes.LOGIN, googleUser);
        return action;
    } catch (e) {
        console.log(e);
    }
}

export async function anonymousLogin() {
    const actualUser = await authMethods.signInAnonnymusly();
    const action = myDispatch(actionTypes.LOGIN, actualUser);
    return action;
}

export async function createUser(email, password) {
    try {
        const newUser = await authMethods.createUser(email, password);
        const action = myDispatch(actionTypes.CREATE_USER, newUser);
        return action;
    } catch (e) {
        console.log(e);
    }
}