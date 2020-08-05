import './firebaseinit';
import firebase from 'firebase';

export const authMethods = {
	signin: (email, password) => {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	},

	logout: () => {
		return firebase.auth().signOut();
	},

	signInWithGoogle: () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
		return firebase.auth().signInWithPopup(provider);
	}
};
