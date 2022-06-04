// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //本番環境（ルールも雑に設定してあるから、必要に応じて書き換えが必要）
    apiKey: "AIzaSyD_q4dnLhtN0m0mlykVaMN_Ut-BfP7U5Z0",
    authDomain: "deploy-trial-49a5e.firebaseapp.com",
    projectId: "deploy-trial-49a5e",
    storageBucket: "deploy-trial-49a5e.appspot.com",
    messagingSenderId: "360524035706",
    appId: "1:360524035706:web:b68adea160e6eb5402adc3"

    //テスト環境(30日で使えなくなるのが面倒だったから使うのをやめた)
    /*
  apiKey: "AIzaSyA2TPkVYM-QgcGqZDZd-56Xeh4mfKyIlZU",
  authDomain: "fir-tutorial-389d9.firebaseapp.com",
  projectId: "fir-tutorial-389d9",
  storageBucket: "fir-tutorial-389d9.appspot.com",
  messagingSenderId: "308409549707",
  appId: "1:308409549707:web:557124d749311dd17a258e"
*/
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;