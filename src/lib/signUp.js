// Importo la configuracion de firebase
import Firebase from "../firebaseConfig.js";
// pongo los nombres usuales de los objetos y funciones de firebase
const { 
  auth, createUserWithEmailAndPassword, set, ref, database,
} = Firebase;
export const signUp = () => {
  // Initialize Firebase

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      set(ref(database, `users/${user.uid}`), {
        email,
        password,
      })
        .then(() => {
          // Data saved successfully!
          alert('Usuario en la base de datos!');
        })
        .catch((error) => {
          // The write failed...
          alert(error);
        });
      alert('Usuario creado!');
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
    });
};