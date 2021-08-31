import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyB8EjFOIn64ZCnDr9qUbkiaVvlf42_7dnI",
    authDomain: "avanzado-79713.firebaseapp.com",
    projectId: "avanzado-79713",
    storageBucket: "avanzado-79713.appspot.com",
    messagingSenderId: "974593303171",
    appId: "1:974593303171:web:53e44430ff308fb77ef1b6",
    measurementId: "G-M9RFDH83C0"
  };
  // Initialize Firebase
  const fb= firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();