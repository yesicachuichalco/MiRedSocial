import { firebaseLeerPublicacion } from "../lib/firebasePublicaciones";

export const timelineEventos = async (onNavigate) => {  
  const mainPublicacion = document.getElementById("miPublicacion");
  mainPublicacion.innerHTML +=   await firebaseLeerPublicacion()
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
};
