const container = document.querySelector(".container");
const contador = document.getElementById("contador");

let varContador = 0;

container.addEventListener("click", evento => {
  // programe SOLO AQUI

  if (evento.target.textContent === "Aumentar") {
    varContador++
    contador.textContent =  varContador;
  }
  if (evento.target.textContent === "Disminuir") {
    varContador--;
    contador.textContent = varContador;
  }
  
});

document.body.addEventListener("click", () => { console.log("click"); });
