import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIc0HY2DFBeCwxQefBM2emG1nge8aLNLA",
    authDomain: "cunyconnect-15be5.firebaseapp.com",
    projectId: "cunyconnect-15be5",
    storageBucket: "cunyconnect-15be5.appspot.com",
    messagingSenderId: "163817623208",
    appId: "1:163817623208:web:bff36c362153d401effc9d",
    measurementId: "G-SZZSKFBBM7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
