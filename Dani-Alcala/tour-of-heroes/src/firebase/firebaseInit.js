import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDpnvWUi2rfPvb8Jw8Bs9CJdcI6OgwnHWg",
    authDomain: "toh-react-dani-alcala.firebaseapp.com",
    databaseURL: "https://toh-react-dani-alcala.firebaseio.com",
    projectId: "toh-react-dani-alcala",
    storageBucket: "toh-react-dani-alcala.appspot.com",
    messagingSenderId: "466042741976",
    appId: "1:466042741976:web:aebd7fc55d6167e5f963ad"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.auth()
  