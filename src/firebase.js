import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAej62VzIRgtR3DfQ3GVDt-yLnc6JULCPE",
    authDomain: "streaming-site-aac27.firebaseapp.com",
    projectId: "streaming-site-aac27",
    storageBucket: "streaming-site-aac27.appspot.com",
    messagingSenderId: "483096888499",
    appId: "1:483096888499:web:63d5663ffa3c719d211cc6",
    measurementId: "G-70H7Z0FTY3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;