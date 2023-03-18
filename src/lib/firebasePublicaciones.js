import FirebaseApp from '../firebaseConfig.js'
import { getFirestore, addDoc,getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

export const firebaseCrearPublicacion = async (texto)  =>  {
  //conectando a la base de datos de firestore
  const db = getFirestore(FirebaseApp);
  await addDoc(collection(db,"Publicaciones"),{publicacion:texto})
  console.log("dato insertado")
}

export const firebaseLeerPublicacion = async () => {
  //conectando a la base de datos de firestore
  const db = getFirestore(FirebaseApp);
  // con el await decimos que esperemos que termine la funcion getDocs antes de continuar
  const querySnapshot = await getDocs(collection(db,"Publicaciones"))
  let HtmlString = ""
  querySnapshot.forEach(function(doc){  
    HtmlString += `
    <article class="miPublicacion">
      <p>${doc.data().publicacion}</p>
    </article>
  `
  })
  return HtmlString;
}