// importo la configuracion de firebase del archivo de barril
import Firebase from "../firebaseConfig.js";

// pongo los nombres usuales de los objetos y funciones de firebase
const {
  auth, signInWithEmailAndPassword, update, ref, database,
} = Firebase;

export const signIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const lgDate = new Date();
    return update(ref(database, `users/${user.uid}`), {
      last_login: lgDate,
    });
  })
  .then(() => {
    return true
  })
  .catch((error) => {
    return false
  });
