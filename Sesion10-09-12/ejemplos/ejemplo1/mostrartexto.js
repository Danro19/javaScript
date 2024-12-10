export default function mostrarTexto(elemHTML) {
  console.log("Funcion mostrarTexto");
  fetch("datos.csv")
    .then((response) => response.text())
    .then((data) => {
      console.table(data);
      elemHTML.innerHTML = data;
    })
    .catch((error) =>
      console.error("Error en la petición del archivo \n", error.message)
    )
    .finally(() =>
      console.log("Ha terminado el consumo del API por parte del FETCH")
    );
}
