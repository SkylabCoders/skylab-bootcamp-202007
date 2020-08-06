import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7PFkJHpfICGATAto2rLd9sK408zoUduI",
    authDomain: "quizteamproject.firebaseapp.com",
    databaseURL: "https://quizteamproject.firebaseio.com",
    projectId: "quizteamproject",
    storageBucket: "quizteamproject.appspot.com",
    messagingSenderId: "36284564341",
    appId: "1:36284564341:web:240ec3b5e50c7cdc9c893c"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.auth();

