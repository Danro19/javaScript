//MAPAS
//crear un mapa
const mapa= new Map();
// agregar una llave - valor al mapa
mapa.set("123", "Warllen");
mapa.set("396", "Ada");
mapa.set("133", "Nicolas");


// .has Verificar si una llave existe en el mapa
console.log(mapa.has("Laia"));


// .get() obtiene el valor del mapa
console.log(mapa.get("123"));
console.log(mapa.get("555"));


// recorrer con for .. of

for(let llave of mapa.keys()){
    console.log(llave + " : "+ mapa.get(llave));
}


// recorrido por foreach

mapa.forEach((valor, llave)=> console.log(llave + " -> " + valor)); 

// .size para decir el tamaño
console.log("Tamaño: " + mapa.size);

// .delete borrar una persona

mapa.delete("133");
console.log("Tamaño: " + mapa.size)

// .clear borra todos los items

mapa.clear();
console.log("Tamaño: "+ mapa.size)