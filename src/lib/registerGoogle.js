import Firebase from "../firebaseConfig.js";
// pongo los nombres usuales de los objetos y funciones de firebase
const { 
  auth, GoogleAuthProvider, signInWithPopup,
} = Firebase;

export const registerGoogle = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    return true;
  } catch (error) {
    return false;
  }
};