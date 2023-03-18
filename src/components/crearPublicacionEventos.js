import { firebaseCrearPublicacion } from "../lib/firebasePublicaciones";

export const crearPublicacionEventos = (onNavigate) => {

  document.getElementById('crearPublicacion').addEventListener('click', async () => {   
    const textoPublicacion = document.getElementById("textoPublicacion")
    await firebaseCrearPublicacion(textoPublicacion.value);    
    alert("se inserto la publicacion")
    onNavigate('/timeline')  
  });
};