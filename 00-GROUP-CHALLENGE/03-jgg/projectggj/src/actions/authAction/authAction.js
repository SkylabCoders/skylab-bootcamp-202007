import dispatcher from '../../appDispatcher';
import actionTypes from './../actionTypes';
import { authMethods } from '../../firebase/firebaseAuthMethods';

export function login(email, password) {
    return authMethods
        .signin(email, password)
        .then(({ user }) => {
            dispatcher.dispatch({
                type: actionTypes.LOGIN,
                data: user
            });
        })
        .catch((error) => console.log(error))
}
export function logout() {
    return authMethods
        .signout()
        .then(() => {
            dispatcher.dispatch({
                type: actionTypes.LOGOUT,
            });
        })
}

export function loginWithGoogle() {
    return authMethods.signInWithGoogle().then((user) => {
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data: user
        });
    });
}

export function sendAccountRegister(email, password) {
    debugger
    return authMethods
        .createAccount(email, password)
        .then((data) =>
            dispatcher.dispatch({
                type: actionTypes.CREATE_PROFILE,
                data
            })
        )
}