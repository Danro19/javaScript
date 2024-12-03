//SET
// Es una coleccion especial, donde un valor solo puede aparecer una vez. Se llama normalmente conjunto


//.size devuelve el tamaño del conjunto
let conj = new Set();
console.log(conj.size)

// .add añade un elemento
conj.add("Audi");
conj.add("Mercedes");
conj.add("Audi");

console.log(conj)

// .delete elimina un elemento

conj.delete("Mercedes");
console.log(conj)

// .has este te dice si existe un item del conjunto

console.log(conj.has("Mercedes"))

// Recorridos

    //For of
for(let elem of conj){
    console.log(elem)
}

    //For each
conj.forEach(elem => console.log(elem));


// values() devuelve un iterador con todos los valores

console.log(conj.values());



//.clear borra todos los items.

conj.clear();
console.log(conj.size)