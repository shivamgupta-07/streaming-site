import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCokmF2Y1HIX7qXszTaBAVmTCGjmtROkUY",
    authDomain: "disneyplus-clone-553a8.firebaseapp.com",
    projectId: "disneyplus-clone-553a8",
    storageBucket: "disneyplus-clone-553a8.appspot.com",
    messagingSenderId: "83990859146",
    appId: "1:83990859146:web:8fa0a7e39808c68ef00c73",
    measurementId: "G-N20ESYXRT3",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;