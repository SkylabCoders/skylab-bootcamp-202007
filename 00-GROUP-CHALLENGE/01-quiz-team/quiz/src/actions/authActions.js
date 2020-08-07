import dispatcher from './../AppDispatcher';
import actionTypes from './actionTypes';
import { authMethods } from './../firebase/firebaseAuthMethods';

export function login(email, password){
    //console.log('ACTION: entering login function in authActions', email, password);
    return authMethods.signIn(email, password)
        .then((data) => 
            {
                //console.log('-> .then of login function in authActions with data:', data);
                dispatcher.dispatch({
                    type: actionTypes.LOGIN,
                    data
            })})
        .catch((error)=>{console.log('-> .catch of login function in authAction with error:', error)});
}

export function logout(){
    return new Promise((resolve) =>{
        resolve();
    }).then(()=>{
        dispatcher.dispatch({
            type: actionTypes.LOGOUT,
        })
    })
}
