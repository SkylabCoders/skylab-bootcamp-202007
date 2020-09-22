import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDDqWzo4vkZqhOUBIE2iOQY4eOzXVL6DU0',
	authDomain: 'andefain.firebaseapp.com',
	databaseURL: 'https://andefain.firebaseio.com',
	projectId: 'andefain',
	storageBucket: 'andefain.appspot.com',
	messagingSenderId: '763955789752',
	appId: '1:763955789752:web:655fff48be5b30a8cb194d'
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
