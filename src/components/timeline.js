export const timeline = () => {
  const root = document.getElementById('pantallaMostrada');
  root.innerHTML = `
  <div id="publicacion">
    <header class="cabecera">
      <div class="lateral"></div>
      <section class="miLogo">
        <img src="./img/img_libro_rojo.png" alt="imagen libro">
        <h1>LEEME</h1>
      </section>
      <img class="lateral" src="./img/imgPerfil.png" alt="imagen perfil">
    </header>
    <main class="mainPublicacion">
      <button class="botonPublicacion" id="nuevaPublicacion">NUEVA PUBLICACION</button>
      <article class="miPublicacion">
        <p>A Karencita le gusta el gato con botas, por Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis ut quae aut debitis </p>
      </article>
      <article class="miPublicacion">
        <p>A Karencita le gusta el gato con botas, por Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis ut quae aut debitis assumenda accusamus autem officiis officia dolorem ipsa, rem adipisci iusto? Consequatur fuga obcaecati quasi excepturi temporibus!</p>
      </article>
      <article class="miPublicacion">
        <p>A Karencita le gusta el gato con botas, por Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </article>      
    </main>
  </div>
  `;
};

