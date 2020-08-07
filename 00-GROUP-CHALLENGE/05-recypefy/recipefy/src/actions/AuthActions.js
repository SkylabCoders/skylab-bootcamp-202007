import dispatcher from "../Dispatcher";
import actionTypes from "../actions/actionTypes";
import {authMethods} from "../firebase/firebaseAuthMethods";

export function login(email, password){
    return authMethods.signin(email, password).then(data => {
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data
        })
    }).catch((event) => window.alert('Error in loggin process'))

   
}

export function logout(){
    return authMethods.signout().then(() => {
            dispatcher.dispatch({
                type: actionTypes.LOGOUT
            })
        })
}

export function googleLogin(){
    return authMethods.signInWithGoogle().then((data)=>{
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data
        })
    }).catch(e => window.alert('Error in login process'))
}

export function anonymousLogin(){
  
    return authMethods.signInAnonnymusly().then((data)=> {
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data
        })
    });
}

export function createUser(email, password){

    return authMethods.createUser(email, password).then((data)=>{
        dispatcher.dispatch({
            type: actionTypes.CREATE_USER,
            data
        })
    }).catch(e => alert(e));
}
