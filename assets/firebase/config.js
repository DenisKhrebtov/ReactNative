import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyBFXjfUliNknb2IFkiEto6ecf4MT-1XPZs",
    authDomain: "hw-2-for-native.firebaseapp.com",
    projectId: "hw-2-for-native",
    storageBucket: "hw-2-for-native.appspot.com",
    messagingSenderId: "247511527146",
    appId: "1:247511527146:web:22573afc993804586cf193"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
