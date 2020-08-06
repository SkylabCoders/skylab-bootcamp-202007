import './firebaseInit';
import firebase from 'firebase';

export const authMethods = {
    //This function signin with an already created account via mail and password
    signin: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },

    //Function to signout throw all authentifications
    signout: () => firebase.auth().signOut(),

    //This function sign in with a Google Account
    signInWithGoogle: () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        return firebase.auth().signInWithPopup(provider)
    },

    //This function to create a user in firebase throw reegisterComponent
    createAccount: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => console.log(result))
            .catch((error) => {
                console.log(error);
            });
    }
};