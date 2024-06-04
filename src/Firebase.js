import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2dvBEjX2zVLNWy6Kb_keXKmfLQUoUDS8",
  authDomain: "discord-clone-aa8a8.firebaseapp.com",
  projectId: "discord-clone-aa8a8",
  storageBucket: "discord-clone-aa8a8.appspot.com",
  messagingSenderId: "1059215016208",
  appId: "1:1059215016208:web:5551cdbd651b115b386595",
  measurementId: "G-8QJTP38LC2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
