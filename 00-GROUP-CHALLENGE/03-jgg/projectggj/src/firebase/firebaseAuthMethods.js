import './firebaseInit';
import firebase from 'firebase';

export const authMethods = {
    signin: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    signout: () => firebase.auth().signOut(),
    signinWithGoogle: () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope("")
        firebase.auth().signInWithPopup(provider)
    }
};