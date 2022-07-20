// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD_scCSahYC0MJUCNx89pAIf1ZoFGgTy78",
    authDomain: "linkedin-clone-1c210.firebaseapp.com",
    projectId: "linkedin-clone-1c210",
    storageBucket: "linkedin-clone-1c210.appspot.com",
    messagingSenderId: "592650521072",
    appId: "1:592650521072:web:e5c07676908221e429b535",
    measurementId: "G-B0WSSDZ60W"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };