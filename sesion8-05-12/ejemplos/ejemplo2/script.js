const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman: HomeComing",
    year: 2017,
  },
  {
    id: 3,
    title: "Avenger: Endgame",
    year: 2019,
  },
];

// // Síncrono
    const getDatos = () => {
     return datos;
 }

// console.log("INICIO");
// console.log(getDatos());
// console.log("FIN");

// // Asíncrono Callback

// const getDatosAsynCallback = (Callback) => {
//     setTimeout( function(Callback){
//         console.log(Callback());
//     }, 3000);
// }
// console.log("INICIO")
// getDatosAsynCallback(getDatos)
// console.log("FIN");

// // Promesas
// const getDatosPromesa = () =>{
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         if (datos.length > 0) {
//           resolve(datos);
//         } else {
//           reject("Error. Sin Datos");
//         }
//       },3000);
//     });
// }

// getDatosPromesa()
//     .then(datos=> console.table(datos))
//     .catch(err => console.error(err));


// con async / await
function obtenerDatos(){
    setTimeout(async()=> {
        const datos = await getDatos();
        console.table(datos)
    },3000);
}


console.log("INICIO");
obtenerDatos();
console.log("FIN");