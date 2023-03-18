import FirebaseApp from '../firebaseConfig.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getDatabase, ref, update } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';

export const signIn = async () => {
    const auth = getAuth(FirebaseApp);
    const database = getDatabase(FirebaseApp);
  
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
  
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const lgDate = new Date();
        return update(ref(database, `users/${user.uid}`), {
          last_login: lgDate,
        });
      })
      .then(() => {
        alert('Usuario logueado!');
        return true
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
        return false
      });
  };