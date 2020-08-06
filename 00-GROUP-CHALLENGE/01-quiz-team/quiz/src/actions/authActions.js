import dispatcher from './../AppDispatcher';
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