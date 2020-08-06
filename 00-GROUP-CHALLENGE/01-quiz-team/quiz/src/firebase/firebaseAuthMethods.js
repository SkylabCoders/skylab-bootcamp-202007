/* puede haber múltiples métodos de autentificación */

import './firebaseInit';
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
    }
}