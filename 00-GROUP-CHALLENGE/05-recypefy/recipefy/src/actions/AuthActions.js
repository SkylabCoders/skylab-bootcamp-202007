<<<<<<< HEAD
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
    }).catch(error => console.log(error))

   
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
    }).catch(e => console.log(e))
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
=======
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
>>>>>>> 0015d0e15021bd2360381e9b71730546559d9d47
