let credito = 150000//Number(prompt("Ingrese el monto de su crédito:"));
let interes = 12 //Number(prompt("Ingrese el interés del crédito: "));
let nMeses = 12//Number(prompt("Ingrese la cantidad de meses en la que pagara el credito: "));
let ninteres = interes/100

function prestamo(credito, ninteres, nMeses)
{
let capital = Number(credito/nMeses)
let interesGeneral = Number(credito * (ninteres))
let valorTotalInteres = Number(credito+interesGeneral)
let CuotaInteres= Number(valorTotalInteres/nMeses)
let CuotaMenosInt=Number(valorTotalInteres-CuotaInteres)
let Cuotacapital=Number(credito-capital)



console.log(capital,"",interesGeneral,"",valorTotalInteres,"",CuotaInteres)


}

console.log(prestamo(credito,ninteres,nMeses));