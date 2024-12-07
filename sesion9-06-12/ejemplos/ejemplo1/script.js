const ahora = new Date();

const horaJenni = new Date(2001, 11, 28, 6, 0, 0);

const horaAnder = new Date(1997, 10, 18);
console.log(ahora);
console.log(horaJenni);
console.log(horaAnder);

const fecha = new Date();
fecha.setFullYear(2024)
fecha.setMonth(11)
fecha.setDate(8);
console.log(fecha)


console.log("Dia Anderson: " + horaAnder.getDay());
console.log("Cadena: " + horaAnder.toDateString());

console.log("cadena hora actual: "+ horaJenni.toTimeString()) // devuelve la hora

console.log("cadena hora corta: "+ horaAnder.toTimeString());

console.log("Milisegundos de Anderson: " + horaAnder.getTime());

const miliDia = 1000*60*60*24;
console.log("Diferencia Anderson y Jenni" + horaAnder.getTime - horaJenni.getTime());
console.log(Math.floor(horaJenni.getTime()-horaAnder.getTime/miliDia 
));