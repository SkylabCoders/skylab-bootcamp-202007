import dispatcher from './../AppDispatcher';
<<<<<<< HEAD
import actionTypes from './actionTypes'
import {authMethods} from './../firebase/firebaseAuthMethods'


export function login(email,password){
    return authMethods
    .signin(email,password)
    .then(({user}) =>{
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data: user
        })
    }).catch((error) => console.log(error))
}

export function logout(){
    return authMethods.signout()
    .then(()=>{
        dispatcher.dispatch({
            type: actionTypes.LOGOUT
        })
    })
}

/* export function login(){
    return authMethods.signInWithGoogle()
    .then(({data})=>{
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data
        })
    })
} */
=======
import actionTypes from './actionTypes';
import { authMethods } from './../firebase/firebaseAuthMethods';

export function login(email, password){
    console.log('ACTION: entering login function in authActions', email, password);
    return authMethods.signIn(email, password)
        .then((data) => 
            {
                console.log('-> .then of login function in authActions with data:', data);
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
>>>>>>> f29ec03621641ad5dd945f1546cf5ba63e6060f2
