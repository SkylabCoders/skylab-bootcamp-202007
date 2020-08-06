import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvGxppQcENi09SD_FQHsQpjN-EtjB9CB0",
    authDomain: "quiz-1bc14.firebaseapp.com",
    databaseURL: "https://quiz-1bc14.firebaseio.com",
    projectId: "quiz-1bc14",
    storageBucket: "quiz-1bc14.appspot.com",
    messagingSenderId: "734249629325",
    appId: "1:734249629325:web:a7a939defe0d0538fb14c4",
    measurementId: "G-24KTVZWFKT"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();