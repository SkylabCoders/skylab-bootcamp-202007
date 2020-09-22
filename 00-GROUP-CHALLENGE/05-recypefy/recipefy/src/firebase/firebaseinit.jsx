import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOdCG2_lGpUL6dVrd6rAC4b6emOrewNmk",
    authDomain: "recipefy-fc34e.firebaseapp.com",
    databaseURL: "https://recipefy-fc34e.firebaseio.com",
    projectId: "recipefy-fc34e",
    storageBucket: "recipefy-fc34e.appspot.com",
    messagingSenderId: "605497568863",
    appId: "1:605497568863:web:416bdbc8760ba7a326b5ea"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.auth();