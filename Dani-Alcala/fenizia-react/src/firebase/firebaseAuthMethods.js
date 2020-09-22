import "./firebaseInit";
import firebase from "firebase";

export const authMethods = {
  signin: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signout: () => {
    return firebase.auth().signOut();
  },
  signInWithGoogle: () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    return firebase.auth().signInWithPopup(provider);
  },
  createUser: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
};
