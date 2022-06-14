import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9LWaOwkKWWlY0AxK_GIo_2m5V5BwMh4Y",
  authDomain: "linkedin-clone-54630.firebaseapp.com",
  projectId: "linkedin-clone-54630",
  storageBucket: "linkedin-clone-54630.appspot.com",
  messagingSenderId: "1079250446021",
  appId: "1:1079250446021:web:afcde621cb16c1002432ac",
  measurementId: "G-2BG7YCKXTK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
