import dispatcher from "../Dispatcher";
import actionTypes from "../actions/actionTypes";
import {authMethods} from "../firebase/firebaseAuthMethods";

export function login(email, password){
    return authMethods.signin(email, password).then(data => {
        console.log(data);
        dispatcher.dispatch({
            type: actionTypes.LOGIN,
            data
        })
    }).catch(console.log(error => console.log(error)))

   
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
    }).catch(console.log(e => console.log(e)))
}
