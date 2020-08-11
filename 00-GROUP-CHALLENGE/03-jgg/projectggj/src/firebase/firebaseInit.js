import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBt7cv-3aouels_8j9J_00TVOm_uLiqKiw",
    authDomain: "toh-react-gemma.firebaseapp.com",
    databaseURL: "https://toh-react-gemma.firebaseio.com",
    projectId: "toh-react-gemma",
    storageBucket: "toh-react-gemma.appspot.com",
    messagingSenderId: "584194001802",
    appId: "1:584194001802:web:6b4ebfc1922bb499829673"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();