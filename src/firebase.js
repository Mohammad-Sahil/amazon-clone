// import firebase from 'firebase';
// import firebase from 'firebase';
// import firebase from '../node_modules/firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPjiSn-SYtoQZXRtjCCAltAW0yYioB6VU",
    authDomain: "challenge-cbf44.firebaseapp.com",
    projectId: "challenge-cbf44",
    storageBucket: "challenge-cbf44.appspot.com",
    messagingSenderId: "438377452792",
    appId: "1:438377452792:web:da322aadcb1203656a570d",
    measurementId: "G-2VPXVBSFLR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};