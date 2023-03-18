import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
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
//exporto la configuracion de firebase
export default app