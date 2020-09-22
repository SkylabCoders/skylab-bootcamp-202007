import firebase from 'firebase';
import FIREBASE_CONFIG from './../config/firebaseConfig';

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

const db = firebaseApp.firestore();

export { db };