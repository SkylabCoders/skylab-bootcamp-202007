/* puede haber múltiples métodos de autentificación */
import './../firebase/firebaseinit';
import firebase from 'firebase';
import 'firebase/auth';

const provider_google = new firebase.auth.GoogleAuthProvider();

export const authMethods = {
    signIn: (email, password) => {
        //console.log('FIREBASE AuthMethods: SIGNIN with email & pwd:', email, password);
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    
    signOut: () => firebase.auth().signOut(),
    
    signInWithGoogle: () => {
        provider_google.addScope( 'profile' );
        provider_google.addScope( 'email' );
        return firebase.auth().signInWithPopup(provider_google);
    }
}