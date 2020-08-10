import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';
import { authMethods } from '../firebase/firebaseAuthMethods';

function myDispatch (actualActionType, actualData) {
        return dispatcher.dispatch({
            type: actualActionType,
            data: actualData
        })
}

function logoutDispatch (actualActionType){
    return (
		dispatcher.dispatch({
			type: actionTypes.LOGOUT
		}));
}


export async function login(email, password) {
    
    try{
        const emailUser = await authMethods.signin(email, password);
        const action = await myDispatch(actionTypes.LOGIN, emailUser)
        return action;
    } catch (error){

        window.alert('Error in loggin process');
    }
   
}

export async function logout() {
    const logoutUser = await authMethods.signout();
    const action = await logoutDispatch(actionTypes.LOGOUT);
    return action;
    
}

export async function googleLogin() {
    
    try{
        const googleUser = await authMethods.signInWithGoogle();
        const action = await myDispatch(actionTypes.LOGIN, googleUser)
        return action;

    }catch(e){
        
        window.alert('Error in login process');
    } 
   
}

export async function anonymousLogin() {
    const actualUser = await authMethods.signInAnonnymusly()
    const action = await myDispatch(actionTypes.LOGIN, actualUser)
    return action

}

export async function createUser(email, password) {
   try{
       const createUser = await authMethods.createUser(email, password);
       const action = await myDispatch(actionTypes.CREATE_USER, createUser);
       return action;

   } catch(e) {
       alert(e);
   }
 
}
