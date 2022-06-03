// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2TPkVYM-QgcGqZDZd-56Xeh4mfKyIlZU",
  authDomain: "fir-tutorial-389d9.firebaseapp.com",
  projectId: "fir-tutorial-389d9",
  storageBucket: "fir-tutorial-389d9.appspot.com",
  messagingSenderId: "308409549707",
  appId: "1:308409549707:web:557124d749311dd17a258e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;