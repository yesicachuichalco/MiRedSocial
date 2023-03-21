import { firebaseLeerPublicacion, deletePub } from "../lib/firebasePublicaciones";
import { getTask, actualizarDB } from "../firebaseConfig.js";

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
    } else if (event.target && event.target.className === "botonEditar") { // Evento para editar publicaciones
      const doc = await getTask(event.target.dataset.id)
      const publicacion = document.getElementById(`${doc.id}`)
      const botonEditar = document.getElementById(`botonEditar${doc.id}`) 
      if (estadoEdicion === false) {
        publicacion.setAttribute('contenteditable', 'true')
        publicacion.focus();
        window.getSelection().selectAllChildren(publicacion)
        window.getSelection().collapseToEnd()  
        botonEditar.innerText = "GUARDAR"
        // console.log("botonEditar.innerText = " + botonEditar.innerText + " cambiando a 'Guardar'")
        estadoEdicion = true
        // console.log("estadoEdicion = " + estadoEdicion)
      } else {
        publicacion.setAttribute('contenteditable', 'false')
        await actualizarDB(doc.id, { publicacion: publicacion.innerText })
        swal('Se acualizo la publicacion');
        botonEditar.innerText = "EDITAR"
        // console.log("botonEditar.innerText = " + botonEditar.innerText + " cambiando a 'Editar'")    
        estadoEdicion = false
        // console.log("estadoEdicion = " + estadoEdicion)
      }
    }
  });
};
