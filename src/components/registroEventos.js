export const registroEventos = (onNavigate) => {
  document.getElementById('botonInicioGoogle').addEventListener('click', () => onNavigate('/timeline'));
};