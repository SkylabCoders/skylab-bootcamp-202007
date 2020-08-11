import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

export function login(email, password) {
	// return authMethods
	// 	.signin(email, password)
	// 	.then(({user}) => {
			
	// 		dispatcher.dispatch({
	// 			type: actionTypes.LOGIN,
	// 			user
	// 		});
	// 	})
    // 	.catch((error) => console.log(error));
    
    return authMethods.signInWithGoogle().then(({user}) => {
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            user
    	});
    })
}

export function logout() {
	return authMethods.signout().then(() => {
		dispatcher.dispatch({
			type: actionTypes.LOGOUT
		});
	});
}
