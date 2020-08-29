import dispatcher from '../../appDispatcher';
import actionTypes from './../actionTypes';
import { authMethods } from '../../firebase/firebaseAuthMethods';

function myDispatch(actualActionType, actualData) {
    return dispatcher.dispatch({
        type: actualActionType,
        data: actualData
    });
}

export async function logout() {

    try {
        const logouts = await authMethods.signout();
        const action = await myDispatch(actionTypes.LOGOUT, logouts);
        return action;
    } catch (error) {
        window.alert(`${error} in logout process.`)
    }
    /*     return authMethods
            .signout()
            .then(() => {
                dispatcher.dispatch({
                    type: actionTypes.LOGOUT,
                });
            }) */
}

export async function login(email, password) {

    try {
        const emailUser = await authMethods.signin(email, password);
        const action = await myDispatch(actionTypes.LOGIN, emailUser);
        return action;
    } catch (error) {
        window.alert(`${error} in loggin process.`);
    }

    /* This is without async await
         authMethods
            .signin(email, password)
            .then((user) => {
                dispatcher.dispatch({
                    type: actionTypes.LOGIN,
                    data: user
                });
            })
            .catch((error) => console.log(error)) */
}

export async function loginWithGoogle() {

    try {
        const googleUser = await authMethods.signInWithGoogle();
        const action = await myDispatch(actionTypes.LOGIN, googleUser);
        return action;
    } catch (error) {
        window.alert(`${error} in loggin process.`)
    }

    /*     return authMethods.signInWithGoogle().then((user) => {
            dispatcher.dispatch({
                type: actionTypes.LOGIN,
                data: user
            });
        }); */
}

//Function to call createAccount via flux
export async function sendAccountRegister(email, password) {
    try {
        const sendAccountRegistered = await authMethods.createAccount(email, password);
        const action = await myDispatch(actionTypes.CREATE_PROFILE, sendAccountRegistered);
        return action
    } catch (error) {
        alert(error);
    }
    /* Without async await
         return authMethods
            .createAccount(email, password)
            .then(() =>
                dispatcher.dispatch({
                    type: actionTypes.CREATE_PROFILE
                })
            ) */
}