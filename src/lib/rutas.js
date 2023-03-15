import { login } from '../components/login.js';
import { registro } from '../components/registro.js';
import { timeline } from '../components/timeline';
import { crearPublicacion } from '../components/crearPublicacion.js';
// rutas de la pagina
export const rutas = {
  '/': login,
  '/registro': registro,
  '/timeline': timeline,
  '/crear-publicacion': crearPublicacion
};
