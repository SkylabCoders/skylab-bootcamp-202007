import dispatcher from './../dispatcher';
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
                })
            }
        )
        .catch((error)=>{console.log('-> .catch of login function in authAction with error:', error)});
}

export function loginGoogle(){
    //console.log('ACTION: entering login function in authActions', email, password);
    return authMethods.signInWithGoogle()
        .then((data) => 
            {
                // console.log('-> .then of login function in authActions with data:', data);
                // console.log('-> .specifically, the access token is:', data.credential.accessToken);
                // console.log('-> .specifically, the user is:', data.user);
                dispatcher.dispatch({
                    type: actionTypes.LOGIN,
                    data
            })
            }
        )
        .catch((error)=>
            {
                // console.log('-> .catch of login function in authAction with error:', error);
                // console.log('-> .specifically, the error code is:', error.code);
                // console.log('-> .specifically, the error message is:', error.message);
                // console.log('-> .specifically, the error email is:', error.email);
                // console.log('-> .specifically, the error originated with credential is:', error.credential);
            }
        );
}

export function logout(){
    return new Promise((resolve) =>{
        resolve();
    }).then(()=>{
        dispatcher.dispatch({
            type: actionTypes.LOGOUT,
        })
    }).catch((error)=>{
        console.log(error);
    });
}
