let carros = []
// Agrega al final
carros.push("Renault 4", "Fiat", "Volvo", "Ferrari");
// Elimina del final
carros.pop();
// Elimina por el primer elemento
carros.shift();
// Agrega al inicio
carros.unshift("Audi");
// Devuelve un parte seleccionada y el final no se incluye
console.log(carros.slice(1,3));
console.log(carros);



//agrega o elimina elementos del array y devuelve los elementos eliminados. SPLICE

carros.splice(1,2,"Mercedes","Mazda", "Nissan");
console.log(carros)

// 
console.log("JOIN: " + carros.join("; "));


//Uso de Concat, este une 2 listas y crea un nuevo array

carros = carros.concat("Toyota", "Mitsubichi", ["Suzuki", "Subaru"]);

console.log(carros)

// IndexOf()  busca y devuelve la posicion

console.log(carros.indexOf("Toyota"));

//Include, verifica si el elemento esta en el Array

console.log(carros.includes("Renault 4"))

//Metodo reduce
let rta = carros.reduce((ant, curr)=> (ant += curr.length <= 5 ? `, ${curr}` :"" ), ant="");

console.log(rta);

// metodo reduce en expresion larga

// ant=""
// for (let i=0; i<=carros.length; i++)


