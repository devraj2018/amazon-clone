import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCGThApaA5BVqOoB43ds7AHQMV62-0EFZI",
  authDomain: "clone-ad707.firebaseapp.com",
  projectId: "clone-ad707",
  storageBucket: "clone-ad707.appspot.com",
  messagingSenderId: "154105890979",
  appId: "1:154105890979:web:65b2e2d6fe97ba53205716",
  measurementId: "G-32ET70LZFM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };