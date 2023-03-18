import FirebaseApp from '../firebaseConfig.js'
import { getFirestore, addDoc,getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

export const firebaseCrearPublicacion = async (texto)  =>  {
  //conectando a la base de datos de firestore
  const db = getFirestore(FirebaseApp);
  await addDoc(collection(db,"Publicaciones"),{publicacion:texto})
  console.log("dato insertado")
}