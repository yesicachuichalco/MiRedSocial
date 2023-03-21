import { firebaseLeerPublicacion, deletePub } from "../lib/firebasePublicaciones";

export const timelineEventos = async (onNavigate) => {  
  const mainPublicacion = document.getElementById("publicaciones");
  mainPublicacion.innerHTML =   await firebaseLeerPublicacion()
  document.getElementById('nuevaPublicacion').addEventListener('click', () => onNavigate('/crear-publicacion'));
  let estadoEdicion = false

  mainPublicacion.addEventListener("click", async (event) => {
    if (event.target && event.target.className === "btn-eliminar") {
      console.log("que hay en el targe", event.target.className);
      const alerta = await swal({
        title: "Realmente desea eliminar el post?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (alerta) {
        await deletePub(event.target.dataset.id);
        await swal("Se elimino correctamente!", {
          icon: "success",
        });
        onNavigate("/timeline");
      }
    } 
  });
};
