import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from '../environments/environment';

firebase.initializeApp(environment.firebaseConfig);
firebase.auth();
