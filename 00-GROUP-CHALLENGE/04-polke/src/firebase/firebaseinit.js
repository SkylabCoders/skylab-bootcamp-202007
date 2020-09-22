import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBM8EhNmzmUQwMDQo_v5PPZPtsUqQMKbS4',
	authDomain: 'polke-test-gerard.firebaseapp.com',
	databaseURL: 'https://polke-test-gerard.firebaseio.com',
	projectId: 'polke-test-gerard',
	storageBucket: 'polke-test-gerard.appspot.com',
	messagingSenderId: '470348240952',
	appId: '1:470348240952:web:3a122b68b31c2314efeecd'
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
