/* 
* Una persona invierte $1,000.00 en una cuenta de ahorro que produceel 5% de interés.
suponiendo que todo el interés se deposita en la cuenta, calcule e imprima e monto de dinero en la cuenta al final de cada año, durante 10años.
Muestre una tabla en la página WEB que permita ver el rendimiento de la cuenta año a año.*/

const encabezadoConsola = function () {
  let titulo = "AÑO\t\tINVERSION";
  console.log(titulo);
  console.log("-".repeat(titulo.length + 10));
};

const cuerpoConsola = (anio, valor) => console.log(`${anio}\t\t $${inversion}`);

const pieConsola = () => console.log("=".repeat(25));

function encabezadoWEB() {
  document.write(`
  <table border="1" width="45%">
  <tr style="background: red ">
            <th>AÑO</th>
            <th>INVERSIÓN</th>
        </tr>`);
}

const pieWEB = () => document.write("</table>");

const cuerpoWEB = function (year, inv) {
  let background = year % 2 == 0 ? "white" : "#DAF7A6";
  let fila = `<tr style="background: ${background}">
  <td style="text-align: center;">${year}</td>
  <td style="text-align: right;">$${inv}</td>
  </tr>`;
  document.write(fila);
};

function rendimiento(inversion, interes, tiempo) {
  encabezadoConsola();
  encabezadoWEB();
  for (let i = 1; i <= tiempo; i++) {
    let final = Number(inversion * (1 + interes)).toFixed(2);

    console.log(cuerpoConsola(i, final));
    inversion = final;
    cuerpoConsola(i, final);
    cuerpoWEB(i, final);
  }

  pieWEB;
  pieConsola();
}

let inversion = Number(prompt("Valor de la inversion inicial?", 1000.0));
const INTERES = 0.05;
const TIEMPO = 10;

console.log(rendimiento(inversion, INTERES, TIEMPO));
