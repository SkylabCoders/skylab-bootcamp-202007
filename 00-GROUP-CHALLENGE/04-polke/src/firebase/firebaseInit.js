import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAKHcnf3TKx-yG18mBbHzWQWrdYt3eEbVA',
	authDomain: 'polke-test.firebaseapp.com',
	databaseURL: 'https://polke-test.firebaseio.com',
	projectId: 'polke-test',
	storageBucket: 'polke-test.appspot.com',
	messagingSenderId: '988453885836',
	appId: '1:988453885836:web:75a73522c5d06ce603e8a9'
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
