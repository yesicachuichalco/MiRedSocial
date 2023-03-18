import { signUp } from '../lib/signUp.js';
import { registerGoogle } from '../lib/registerGoogle.js';

export const registroEventos = (onNavigate) => {
  document.getElementById('inputEmail').addEventListener('keyup', function() {
    if (document.getElementById('inputEmail').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      document.getElementById('botonInicio').style['pointer-events'] = "all";
    } else {
      document.getElementById('botonInicio').style['pointer-events'] = "none"
    }
  });
  document.getElementById('botonInicioGoogle').addEventListener('click', () => registerGoogle());
  document.getElementById('botonInicio').addEventListener('click', () => {
    signUp();
  });};