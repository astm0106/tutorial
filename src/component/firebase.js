import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD_q4dnLhtN0m0mlykVaMN_Ut-BfP7U5Z0",
    authDomain: "deploy-trial-49a5e.firebaseapp.com",
    projectId: "deploy-trial-49a5e",
    storageBucket: "deploy-trial-49a5e.appspot.com",
    messagingSenderId: "360524035706",
    appId: "1:360524035706:web:b68adea160e6eb5402adc3"

});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};