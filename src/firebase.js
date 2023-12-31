import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD6PQiS0hp49YKwKkKMbhlTlA9rMaJ_gLo",
  authDomain: "clone-c3778.firebaseapp.com",
  projectId: "clone-c3778",
  storageBucket: "clone-c3778.appspot.com",
  messagingSenderId: "412312533056",
  appId: "1:412312533056:web:8b831a665fb7bc021e47a5",
  measurementId: "G-LZS1NW3E13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
