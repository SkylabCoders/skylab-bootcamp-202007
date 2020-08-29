import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5j16sWtRDJT7GOGMRawNEki71pcDrm8M",
  authDomain: "fenizia-3dc3d.firebaseapp.com",
  databaseURL: "https://fenizia-3dc3d.firebaseio.com",
  projectId: "fenizia-3dc3d",
  storageBucket: "fenizia-3dc3d.appspot.com",
  messagingSenderId: "787225929688",
  appId: "1:787225929688:web:37217e85df3c1199b234ad",
};

firebase.initializeApp(firebaseConfig);
firebase.auth();
