import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD9fEknxuzwPoDPMTPyE39TtakAbk81iM",
  authDomain: "hw-for-reactnative.firebaseapp.com",
  projectId: "hw-for-reactnative",
  storageBucket: "hw-for-reactnative.appspot.com",
  messagingSenderId: "670235340768",
  appId: "1:670235340768:web:c914168c4b4bacd2a20585",
  measurementId: "G-X0SL37RP04",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
