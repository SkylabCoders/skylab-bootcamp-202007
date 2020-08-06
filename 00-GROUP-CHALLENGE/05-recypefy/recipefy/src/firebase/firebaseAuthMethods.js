import './firebaseinit';
import firebase from 'firebase';

export const authMethods = {
	signin: (email, password) => {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	},

	signout: () => firebase.auth().signOut(),

	signInWithGoogle: () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
		firebase.auth().signInWithPopup(provider);
	}
};
