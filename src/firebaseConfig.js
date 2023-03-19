import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import {
  getFirestore,
  addDoc,
  getDocs,
  doc,
  collection,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion, 
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
// import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import {
  getDatabase, set, ref, update,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyBv3V-zXEe_NUvQV3de6TfgIuk0aS8o_Tw",
  authDomain: "red-social-yesica.firebaseapp.com",
  databaseURL: "https://red-social-yesica-default-rtdb.firebaseio.com",
  projectId: "red-social-yesica",
  storageBucket: "red-social-yesica.appspot.com",
  messagingSenderId: "182678742571",
  appId: "1:182678742571:web:5a983fad58fa1d75c82c6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);
// exporto la configuracion de firebase
export default {
  getDatabase,
  set,
  ref,
  update,
  app,
  db,
  auth,
  addDoc,
  getDocs,
  doc,
  collection,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  signInWithEmailAndPassword,
  database,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
}

// const { app: FirebaseApp } = FirebaseConfig;

// export { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

export const getTask = (id) => getDoc(doc(db, 'Publicaciones', id))

export const actualizarDB = (id, nuevoTexto) => updateDoc(doc(db, 'Publicaciones', id), nuevoTexto)