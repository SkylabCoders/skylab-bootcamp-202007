import './firebaseIndex';
import firebase from 'firebase';

export const authMethods = {
	signIn: (email, password) =>
		firebase.auth().signInWithEmailAndPassword(email, password),
	signOut: () => firebase.auth().signOut()
};
