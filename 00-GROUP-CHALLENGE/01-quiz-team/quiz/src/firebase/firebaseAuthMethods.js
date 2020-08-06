<<<<<<< HEAD
import './firebaseInit'
import firebase from 'firebase'

export const authMethods = {
    signin: (email,password) => {
        return firebase.auth().signInWithEmailAndPassword(email,password);
    },

    signout: () =>{
        return firebase.auth().signOut();
    },
    signInWithGoogle:()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
=======
/* puede haber múltiples métodos de autentificación */

import './firebaseinit';
import firebase from 'firebase';

export const authMethods = {
    signIn: (email, password) => {
        console.log('FIREBASE AuthMethods: SIGNIN with email & pwd:', email, password);
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    signOut: () => firebase.auth().signOut(),
    signInWithGoogle: () => {
        let provider;
        firebase.auth().signInWithPopup(provider);
>>>>>>> f29ec03621641ad5dd945f1546cf5ba63e6060f2
    }
}