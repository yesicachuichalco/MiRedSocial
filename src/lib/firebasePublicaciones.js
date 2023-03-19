// importo la configuracion de firebase del archivo de barril
import Firebase from "../firebaseConfig.js";

// pongo los nombres usuales de los objetos y funciones de firebase
const { 
  db, auth, addDoc, getDocs, doc, collection, deleteDoc, updateDoc, arrayRemove, arrayUnion,  
} = Firebase;
export const firebaseCrearPublicacion = async (texto) => {
  // insertando la publicacion en la coleccion Publicaciones con el documento publicacion
  await addDoc(collection(db, "Publicaciones"), {
    publicacion: texto,
    email: auth.currentUser.email,
  });
  console.log("dato insertado");
};

export const firebaseLeerPublicacion = async () => {

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